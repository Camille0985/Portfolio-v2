import "./Footer.scss";
import { Link } from "react-router-dom";
import githubIcon from "../../assets/icons/github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <img src={githubIcon} alt="GitHub" className="footer-icon" />
        <ul className="footer__links">
          <li>
            <Link to="/mentions-legales">Mentions légales</Link>
          </li>
          <li>
            <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;