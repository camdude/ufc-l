import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ meta, paths, children }) {
  return (
    <div>
      <Head>
        <title>{`UFC-L | ${meta.title}`}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f4bc19" />
        <meta name="msapplication-TileColor" content="#f4bc19" />
        <meta name="theme-color" content="#f4bc19" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:type" content={meta.type} />
        <meta
          property="og:image"
          content={meta.image || "/portrait-square.png"}
        />
        <meta property="og:url" content={`https://localhost:3000${meta.url}`} />
        <meta property="og:site_name" content="UFC-L" />
        <meta name="description" content={meta.desc} />
      </Head>
      <Navbar paths={paths} />
      {children}
      <Footer />
    </div>
  );
}
