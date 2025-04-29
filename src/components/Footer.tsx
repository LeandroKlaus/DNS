import React, { useState, useEffect } from 'react';
import logo from '../assets/DNS.svg';

const Footer: React.FC = () => {
  const [footerVisible, setFooterVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  const handleScroll = () => {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const threshold = 50;
    if (scrollPos + windowHeight >= docHeight - threshold) {
      setFooterVisible(true);
    } else {
      setFooterVisible(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    handleResize();
    handleScroll();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const finalVisible = isMobile ? footerVisible : true;

  return (
    <footer className={finalVisible ? "footer footer-visible" : "footer"}>
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
