import BlockContent from "@sanity/block-content-to-react";
import { getNavigation, getPagebySlug } from "../lib/api";
import Layout from "../layouts/MainLayout";

const overrides = {
  h1: (props) => <h1 className="blog__h1" {...props} />,
  h2: (props) => <h2 className="blog__h2" {...props} />,
  h3: (props) => <h3 className="blog__h3" {...props} />,
  h4: (props) => <h3 className="blog__h4" {...props} />,
  h5: (props) => <h3 className="blog__h5" {...props} />,
  h6: (props) => <h3 className="blog__h6" {...props} />,
  a: (props) => <a className="blog__a" {...props} />,
  blockquote: (props) => <blockquote className="blog__quote" {...props} />,
  normal: (props) =>
    props.children[0] === "" ? (
      <div className="blog__break" />
    ) : (
      <p className="blog__paragraph" {...props} />
    ),
};

const serializers = {
  list: (props) => <ul className="blog__list" {...props} />,
  listItem: (props) => <li className="blog__listItem" {...props} />,
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
  if (!page) {
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
      <main className="main-body">
        <BlockContent blocks={page[0].content} serializers={serializers} />
      </main>
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
