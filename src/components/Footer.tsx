import React from 'react';
import logo from '../assets/DNS.svg';

interface FooterProps {
  isFooterVisible: boolean;
}

const Footer: React.FC<FooterProps> = ({ isFooterVisible }) => {
  return (
    <footer className={isFooterVisible ? "footer footer-visible" : "footer"}>
      <div className="footer-left">
        <p>&copy; 2025 DNSites. Todos os direitos reservados.</p>
        <p>Seu site premium é nossa prioridade.</p>
      </div>
      <div className="footer-center">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-right">
        <a href="https://www.instagram.com/dnsites" target="_blank" rel="noopener noreferrer" className="footer-powered">Powered by @dnsites</a>
      </div>
    </footer>
  );
};

export default Footer;
