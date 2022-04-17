import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__columns">
        <div className="Footer__section">
          <h4 className="Footer__heading">Links</h4>
          <ul className="Footer__list">
            <li className="Footer__listItem">
              <a
                className="Footer__link link"
                href="mailto:launceston@ufcutas.org"
                target="blank"
              >
                <FontAwesomeIcon icon="envelope" /> Email
              </a>
            </li>
            <li className="Footer__listItem">
              <a
                className="Footer__link link"
                href="https://www.facebook.com/UniFellowshipLaunceston"
                target="blank"
              >
                <FontAwesomeIcon icon={["fab", "facebook-square"]} /> Facebook
              </a>
            </li>
            <li className="Footer__listItem">
              <a
                className="Footer__link link"
                href="https://focustas.org"
                target="blank"
              >
                <FontAwesomeIcon icon={["fac", "focus"]} /> FOCUS
              </a>
            </li>
            <li className="Footer__listItem">
              <a
                className="Footer__link link"
                href="https://afes.org.au/"
                target="blank"
              >
                <FontAwesomeIcon icon={["fac", "afes"]} /> AFES
              </a>
            </li>
            {/* <li className="Footer__listItem">
              <a
                className="Footer__link link"
                href="https://headingtouni.info"
                target="blank"
              >
                <FontAwesomeIcon icon={["fac", "headingToUni"]} /> Heading to Uni
              </a>
            </li> */}
          </ul>
        </div>
        <div className="Footer__section">
          <h4 className="Footer__heading">Navigation</h4>
          <ul className="Footer__list">
            <li className="Footer__listItem">
              <Link href="/">
                <a className="Footer__link link">Home</a>
              </Link>
            </li>
            <li className="Footer__listItem">
              <Link href="/about">
                <a className="Footer__link link">About</a>
              </Link>
            </li>
            <li className="Footer__listItem">
              <Link href="/events">
                <a className="Footer__link link">Events</a>
              </Link>
            </li>
            <li className="Footer__listItem">
              <Link href="/contact">
                <a className="Footer__link link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="Footer__copyright">
        Copyright © 2020-{moment().format("YYYY")} Cameron Clifford, All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
