import React from 'react';
import logo from '../assets/GS.svg';
import centralLogo from '../assets/Braga.svg';
import instaIcon from '../assets/Insta.svg';
import wppIcon from '../assets/Wpp.svg';
import locIcon from '../assets/Loc.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="GS" />
        <a href="#" className="nav-large">Gustavo Sadok</a>
      </div>
      <div className="header-logo-center">
        <img src={centralLogo} alt="Central Logo" />
      </div>
      <nav className="nav-icons">
        <ul className="nav-menu-icons">
          <li>
            <a href="https://www.instagram.com/gustavomt09yt" target="_blank" rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5592981561566?text=Estou%20interessado%20em%20adquirir%20uma%20nova%20moto" target="_blank" rel="noopener noreferrer">
              <img src={wppIcon} alt="WhatsApp" />
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/fwahKuGHbpweXcbj7" target="_blank" rel="noopener noreferrer">
              <img src={locIcon} alt="Localização" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
