import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout
      meta={{
        title: "About",
        type: "website",
        url: "/about",
        desc: "Welcome to my Uni Fellowship.",
      }}
    >
      <main className="main-body">
        <h1 className="heading-primary">About</h1>
        <h2 className="heading-secondary">Heading 2</h2>
        <br />
        <h3 className="heading-tertiary">Heading 3</h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque,
          repudiandae minima adipisci sit quo odio nisi voluptate quibusdam
          molestiae exercitationem illo ad, eveniet doloremque nesciunt quos
          debitis deserunt dolore!
        </p>
      </main>
    </MainLayout>
  );
}
