import React from 'react';
import logo from '../assets/GS.svg';

interface FooterProps {
  isFooterVisible: boolean;
}

const Footer: React.FC<FooterProps> = ({ isFooterVisible }) => {
  return (
    <footer className={isFooterVisible ? "footer footer-visible" : "footer"}>
      <div className="footer-left">
        <p>&copy; 2025 Gustavo Sadok. Todos os direitos reservados.</p>
        <p>Sua moto 0km é a nossa prioridade.</p>
      </div>
      <div className="footer-center">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-right">
        <a href="https://github.com/LeandroKlaus" target="_blank" rel="noopener noreferrer" className="footer-powered">Powered by @klausdev</a>
      </div>
    </footer>
  );
};

export default Footer;
