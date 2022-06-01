import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import Hero from "../components/Hero";
import MainLayout from "../layouts/MainLayout";
import Section from "../layouts/Section";
import { getNavigation } from "../lib/api";
import ImageBitb from "../public/images/bitb.png";
import ImageBibleGroups from "../public/images/bible-groups.png";
import ImageConnect from "../public/images/connect.png";

export default function Home({ navPaths }) {
  return (
    <MainLayout
      meta={{
        title: "Home",
        type: "website",
        url: "/",
        desc: "Welcome to Uni Fellowship.",
      }}
      paths={navPaths}
    >
      <Hero />
      <Section color="primary">
        <h2 className="heading-secondary">Events</h2>
        <div className="gallery">
          <Link href={`/events`}>
            <div className="gallery__img">
              <Image
                src={ImageConnect}
                width={500 / 2}
                height={350 / 2}
                alt="Connect Events"
              />
              <h3 className="gallery__title">Connect Events</h3>
            </div>
          </Link>
          <Link href={`/events`}>
            <div className="gallery__img">
              <Image
                src={ImageBibleGroups}
                width={500 / 2}
                height={350 / 2}
                alt="Bible Groups"
              />
              <h3 className="gallery__title">Bible Groups</h3>
            </div>
          </Link>
          <Link href={`/events`}>
            <div className="gallery__img">
              <Image
                src={ImageBitb}
                width={500 / 2}
                height={350 / 2}
                alt="Bible in the Bar"
              />
              <h3 className="gallery__title">Bible in the Bar</h3>
            </div>
          </Link>
        </div>
      </Section>
      <Section color="tertiary">
        <h2 className="heading-secondary">Starting Uni?</h2>
        <p>
          We&apos;d love to get in touch with you and help your transition to
          uni be a smooth one. Even if you are planning on going to another uni,
          we&apos;d love to put you in touch with the AFES group there!
        </p>
        <br />
        <Button href="https://ufcutas.elvanto.com.au/form/4fceb37b-1817-4c5d-89e7-243a3d0fe52e">
          I&apos;m at UTAS
        </Button>
        <br />
        <Button href="https://headingtouni.info">
          Other University Christian Groups
        </Button>
      </Section>
      <Section color="secondary">
        <h2 className="heading-secondary">Get In Touch</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          eligendi dignissimos voluptates eius aliquam totam modi eum deserunt
          facilis placeat impedit laborum rerum quam nemo nihil sed ipsum, velit
          fuga?
        </p>
      </Section>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const navPaths = await getNavigation();

  return {
    props: { navPaths },
    revalidate: 1,
  };
}
