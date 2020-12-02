import React, { useState } from 'react';
import './footer.css';

const About = () => {
  const [footerOpened, setFooterOpened] = useState(false);

  const openFooter = () => {
    setFooterOpened(true);
  };
  const closeFooter = () => {
    setFooterOpened(false);
  };
  return (
    <div
      onMouseOver={openFooter}
      onMouseLeave={closeFooter}
      id="footer"
      className="footer"
    >
      <p>Lena Bačíková & Zuzka Jakubčáková</p>
      <div className={footerOpened ? 'footer-opened' : 'footer-closed'}>
        tady budou odkazy
      </div>
    </div>
  );
};
export default About;
