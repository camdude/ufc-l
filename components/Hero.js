import Link from "next/link";
import Image from "next/image";
import ImageFeather from "../public/social-logos/feather.png";

export default function Hero({ title, subtitle, cta, link }) {
  return (
    <div className="Hero">
      <div className="Hero__feather">
        <Image
          src={ImageFeather}
          width={360}
          height={360}
          alt="feather"
        ></Image>
      </div>
      <h1 className="Hero__heading">University Fellowship <br /> of Christians</h1>
      <p className="Hero__desc">{subtitle}</p>
      <div className="Hero__cta">
        <Link href={link}>
          <a className="Hero__ctaLink">{cta}</a>
        </Link>
      </div>
    </div>
  );
}
