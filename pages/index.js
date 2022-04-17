import Button from "../components/Button";
import Hero from "../components/Hero";
import MainLayout from "../layouts/MainLayout";
import Section from "../layouts/Section";
import { getNavigation } from "../lib/api";

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
        <h2 className="heading-secondary">Gallery</h2>
      </Section>
      <Section color="tertiary">
        <h2 className="heading-secondary">Starting Uni?</h2>
        <p>
          We&apos;d love to get in touch with you and help your transition to
          uni be a smooth one. Even if you are planning on going to another uni,
          we&apos;d love to put you in touch with the AFES group there!
        </p>
        <br />
        <Button href="https://headingtouni.info">Heading to Uni</Button>
      </Section>
      <Section color="secondary">
        <h2 className="heading-secondary">Events</h2>
        <p>
          We plan all our events and activities to help us share the gospel of
          Jesus with the Hobart campuses of UTAS and to equip Christian
          university students in the Christian life and ministry, order to raise
          up a new generation of pastors, missionaries, church planters,
          evangelists, youth leaders and active church members. See the sub menu
          items in the main sidebar navigation menu.
        </p>
      </Section>
      <Section color="primary">
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
