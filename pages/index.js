import Hero from "../components/Hero";
import MainLayout from "../layouts/MainLayout";

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
      <main className="main-body"></main>
    </MainLayout>
  );
}
