import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
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
        <div className="Navbar__title">Uni Fellowship</div>
      </div>
      <ul className={`Navbar__list ${navOpen ? "Navbar__list--open" : ""}`}>
        <li className="Navbar__item">
          <Link href="/">
            <a className="Navbar__link">Home</a>
          </Link>
        </li>
        <li className="Navbar__item">
          <Link href="/about">
            <a className="Navbar__link">About</a>
          </Link>
        </li>
        <li className="Navbar__item">
          <Link href="/events">
            <a className="Navbar__link">Events</a>
          </Link>
        </li>
        <li className="Navbar__item">
          <Link href="/contact">
            <a className="Navbar__link">Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
