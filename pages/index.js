import Hero from "../components/Hero";
import MainLayout from "../layouts/MainLayout";
import Section from "../layouts/Section";

export default function Home() {
  return (
    <MainLayout
      meta={{
        title: "Home",
        type: "website",
        url: "/",
        desc: "Welcome to my Uni Fellowship.",
      }}
    >
      <Hero />
      <Section color="primary">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          eligendi dignissimos voluptates eius aliquam totam modi eum deserunt
          facilis placeat impedit laborum rerum quam nemo nihil sed ipsum, velit
          fuga?
        </p>
      </Section>
      <main className="main-body"></main>
    </MainLayout>
  );
}
