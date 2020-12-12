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
        <div className="footer__authors">
          <p>©2020</p> <p>Lena Bačíková & Zuzka Jakubčáková</p>
        </div>
        <div className="footer__czechitas">
          <p> Závěrečný projekt</p>
          <a
            href="https://www.czechitas.cz/cs/co-delame/digitalni-akademie?gclid=CjwKCAiA_Kz-BRAJEiwAhJNY79ptnVPei7Vrul_F9mrCIZCNMdb8sAXjbKcxl0p0WucNaye0v72g-BoCWxgQAvD_BwE"
            target="_blank"
          >
            Digitální Akademie Web, Czechitas
          </a>
        </div>
        <div className={footerOpened ? 'footer-opened' : 'footer-closed'}>
          <a
            className="footer__href"
            href="https://www.freepik.com"
            target="_blank"
          >
            Icons by www.freepik.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
