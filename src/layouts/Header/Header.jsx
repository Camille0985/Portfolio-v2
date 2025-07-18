import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);


  return (
    <header className="header">
      <div className="container header-content">
        <div id="logo">
          <a href="/">Camille Duprez</a>
        </div>
        <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bg-menu__span bg-menu__span__big"></span>
          <span className="bg-menu__span bg-menu__span__short"></span>
          <span className="bg-menu__span bg-menu__span__big"></span>
        </div>
        <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
          <ul className="header__ul">
            <li className="header__link" onClick={closeMenu}><a href="/#Skills">Compétences</a></li>
            <li className="header__link" onClick={closeMenu}><a href="/#Works">Projets</a></li>
            <li className="header__link" onClick={closeMenu}><a href="/#Contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
