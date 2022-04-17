import "../styles/index.scss";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import faAfes from "../public/logos/afesLogo";
import faHeadingToUni from "../public/logos/headingToUniLogo";
import faFocus from "../public/logos/focusLogo";


library.add(faBars, faEnvelope, faFacebookSquare, faAfes, faHeadingToUni, faFocus);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
