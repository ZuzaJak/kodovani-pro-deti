import React, { useState } from 'react';
import './footer.css';
import icon_footer from '../img/icon/icon_footer.svg';

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
      <div className="footer__flex">
        <p>Lena Bačíková & Zuzka Jakubčáková</p>
        <img className="icon_footer" src={icon_footer} alt="šipka" />
        <div className={footerOpened ? 'footer-opened' : 'footer-closed'}>
          <a
            className="footer__href"
            href="https://www.freepik.com/vectors/abstract"
            target="_blank"
          >
            Abstract vector created by vectorjuice - www.freepik.com
          </a>

          <a
            className="footer__href"
            href="https://www.freepik.com/vectors/business"
            target="_blank"
          >
            Business vector created by vectorjuice - www.freepik.com
          </a>

          <a
            className="footer__href"
            href="https://www.freepik.com/vectors/school"
            target="_blank"
          >
            School vector created by vectorjuice - www.freepik.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
