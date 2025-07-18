import "./Footer.scss";
import githubIcon from "../../assets/icons/github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <img src={githubIcon} alt="GitHub" className="footer-icon" />
      </div>
    </footer>
  )
}

export default Footer;