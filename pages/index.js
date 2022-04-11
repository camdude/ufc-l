import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout
      meta={{
        title: "Home",
        type: "website",
        url: "/",
        desc: "Welcome to my personal website. Check out my blog to get updates on what I am currently thinking and doing.",
      }}
    >
      <h1 className="heading-primary">Heading 1</h1>
      <h2 className="heading-secondary">Heading 2</h2>
      <br />
      <h3 className="heading-tertiary">Heading 3</h3>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque,
        repudiandae minima adipisci sit quo odio nisi voluptate quibusdam
        molestiae exercitationem illo ad, eveniet doloremque nesciunt quos
        debitis deserunt dolore!
      </p>
    </MainLayout>
  );
}
