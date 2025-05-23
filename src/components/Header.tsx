import React from 'react';
import logo from '../assets/DNSites.svg';
import instaIcon from '../assets/Insta.svg';
import wppIcon from '../assets/Wpp.svg';
import locIcon from '../assets/Loc.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="DNS" />
      </div>
      <nav className="nav-icons">
        <ul className="nav-menu-icons">
          <li>
            <a href="https://www.instagram.com/dnsites" target="_blank" rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5592984615420?text=Olá,%20estou%20interessado%20em%20adquirir%20um%20site." target="_blank" rel="noopener noreferrer">
              <img src={wppIcon} alt="WhatsApp" />
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/J8KG8PQV8a5m7mAFA" target="_blank" rel="noopener noreferrer">
              <img src={locIcon} alt="Localização" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
