import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/api";

const CardGallery = ({ cards }) => {
  return (
    <div className="gallery">
      {cards.map((c) => {
        return (
          <Link key={c._key} href={c.link} passHref>
            <div className="gallery__img">
              <Image
                src={urlFor(c.image.asset).url()}
                width={500 / 2}
                height={350 / 2}
                alt="Connect Events"
              />
              <h3 className="gallery__title">{c.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardGallery;
