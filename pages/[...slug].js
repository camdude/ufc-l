import BlockContent from "@sanity/block-content-to-react";
import { getNavigation, getPagebySlug, urlFor } from "../lib/api";
import Layout from "../layouts/MainLayout";
import { useRouter } from "next/router";
import ImageWithHideOnError from "../hooks/ImageWithHideOnError";

const overrides = {
  h1: (props) => <h1 className="block__h1" {...props} />,
  h2: (props) => <h2 className="block__h2" {...props} />,
  h3: (props) => <h3 className="block__h3" {...props} />,
  h4: (props) => <h3 className="block__h4" {...props} />,
  h5: (props) => <h3 className="block__h5" {...props} />,
  h6: (props) => <h3 className="block__h6" {...props} />,
  a: (props) => <a className="block__a" {...props} />,
  blockquote: (props) => <blockquote className="block__quote" {...props} />,
  normal: (props) =>
    props.children[0] === "" ? (
      <div className="block__break" />
    ) : (
      <p className="block__paragraph" {...props} />
    ),
};

const serializers = {
  list: (props) => <ul className="block__list" {...props} />,
  listItem: (props) => <li className="block__listItem" {...props} />,
  types: {
    block: (props) => {
      // Check if we have an override for the “style”
      return overrides[props.node.style]
        ? // if so, call the function and pass in the children, ignoring
          // the other unnecessary props
          overrides[props.node.style]({ children: props.children })
        : // otherwise, fallback to the provided default with all props
          BlockContent.defaultSerializers.types.block(props);
    },
  },
};

export default function Page({ navPaths, page }) {
  const router = useRouter();
  console.log(page);

  if (!router.isFallback && !page?.length) {
    return (
      <Layout
        meta={{
          title: "404",
          type: "page",
          image: "",
          url: `/404`,
          desc: "",
        }}
        paths={navPaths}
      >
        <main className="main-body">
          <h1 className="heading-primary u-center-text">ERROR 404</h1>
        </main>
      </Layout>
    );
  }

  if (router.isFallback) {
    return (
      <Layout
        meta={{
          title: "",
          type: "",
          image: "",
          url: ``,
          desc: "",
        }}
      >
        <main className="main-body"></main>
      </Layout>
    );
  }
  return (
    <Layout
      meta={{
        title: page[0].title,
        type: "page",
        image: "",
        url: `/blog/${page.slug}`,
        desc: "",
      }}
      paths={navPaths}
    >
      {page[0].coverImage ? (
        <div className="Page__banner">
          <ImageWithHideOnError
            src={urlFor(page[0]?.coverImage).url()}
            height={1080}
            width={1920}
            alt={`${page[0].title} Banner`}
          />
        </div>
      ) : null}

      <div className="Page__content">
        {page[0].pageBuilder.map((s) => {
          switch (s._type) {
            case "textBlock":
              return (
                <div key={s._key}>
                  <h1 className="block__h1">{s.heading}</h1>
                  <BlockContent blocks={s.content} serializers={serializers} />
                </div>
              );
            case "callToAction":
              return (
                <div key={s._key}>
                  <h1 className="block__h1">{s.heading}</h1>
                  <BlockContent blocks={s.content} serializers={serializers} />
                </div>
              );
            case "gallery":
              return <div key={s._key}></div>;
            case "form":
              return <div key={s._key}></div>;
          }
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const navPaths = await getNavigation();
  const page = await getPagebySlug(params.slug[params.slug.length - 1]);

  return {
    props: { navPaths, page },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const nav = await getNavigation();
  console.log(nav);
  var navPaths = [];
  nav.sections.map((s) => {
    if (s.links) {
      s.links.map((l) => {
        navPaths.push({
          params: { slug: [s.target.slug.current, l.target.slug.current] },
        });
      });
    }
    navPaths.push({
      params: { slug: [s.target.slug.current] },
    });
  });

  return {
    paths: navPaths,
    fallback: true,
  };
}
