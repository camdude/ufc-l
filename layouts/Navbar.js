import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../public/logos/University Fellowship logo MONO REV MID.png";

export default function Navbar({ paths={sections: []} }) {
  const [navOpen, setnavOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="Navbar__header">
        <div className="Navbar__menu">
          <FontAwesomeIcon
            className="Navbar__icon"
            size="lg"
            icon="bars"
            onClick={() => {
              setnavOpen(!navOpen);
            }}
          />
        </div>
        <Link href="/">
          <a className="Navbar__logo">
            <Image
              src={Logo}
              width={597 / 6}
              height={298 / 6}
              alt="Uni Fellowship"
            />
          </a>
        </Link>
      </div>
      <ul className={`Navbar__list ${navOpen ? "Navbar__list--open" : ""}`}>
        <li className="Navbar__item">
          <Link href="/">
            <a className="Navbar__link">Home</a>
          </Link>
        </li>
        {paths.sections.map((s) => {
          return (
            <li className="Navbar__item" key={s._key}>
              <Link href={`/${s.target.slug.current}`}>
                <a className="Navbar__link">{s.title}</a>
              </Link>
              {s.links ? (
                <ul className="Navbar__subList">
                  {s.links.map((l) => {
                    return (
                      <li className="Navbar__subItem" key={l._key}>
                        <Link href={`/${l.target.slug.current}`}>
                          <a className="Navbar__subLink">{l.target.title}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
