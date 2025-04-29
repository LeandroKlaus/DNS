import React, { useState, useEffect } from 'react';
import logo from '../assets/DNS.svg';

const Footer: React.FC = () => {
  const [isFooterVisible, setFooterVisible] = useState(false);

  const checkIfAtBottom = () => {
    if (window.innerWidth < 480) {
      const threshold = 100;
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - threshold) {
        setFooterVisible(true);
      } else {
        setFooterVisible(false);
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth < 480) {
      checkIfAtBottom();
      window.addEventListener('scroll', checkIfAtBottom);
      window.addEventListener('resize', checkIfAtBottom);
    }
    return () => {
      window.removeEventListener('scroll', checkIfAtBottom);
      window.removeEventListener('resize', checkIfAtBottom);
    };
  }, []);

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
        <a
          href="https://www.instagram.com/dnsites"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-powered"
        >
          Powered by @dnsites
        </a>
      </div>
    </footer>
  );
};

export default Footer;
