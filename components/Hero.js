import Link from "next/link";
import Image from "next/image";
import ImageFeather from "../public/social-logos/feather.png"

export default function Hero() {
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
      <h1 className="Hero__heading">
        University Fellowship <br />
        of Christians
      </h1>
      <p className="Hero__desc">
        For everyone on campus in Launceston to have a chance hear about Jesus
        and what he has done for them so that they may come to know and love him
      </p>
      <div className="Hero__cta">
        <Link href="/about">
          <a className="Hero__ctaLink">Who we are</a>
        </Link>
      </div>
    </div>
  );
}
