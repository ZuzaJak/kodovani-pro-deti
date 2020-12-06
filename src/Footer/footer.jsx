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
        <p className="footer__authors">
          ©2020, Lena Bačíková & Zuzka Jakubčáková
        </p>
        <p className="footer__authors">děkujeme našemu mentorovi Jindřichovi</p>
        <a
          className="footer__czechitas"
          href="https://www.czechitas.cz/cs/co-delame/digitalni-akademie?gclid=CjwKCAiA_Kz-BRAJEiwAhJNY79ptnVPei7Vrul_F9mrCIZCNMdb8sAXjbKcxl0p0WucNaye0v72g-BoCWxgQAvD_BwE"
          target="_blank"
        >
          Digitální Akademie Web, Czechitas
        </a>
        <div className={footerOpened ? 'footer-opened' : 'footer-closed'}>
          <a
            className="footer__href"
            href="https://www.freepik.com/vectors/abstract"
            target="_blank"
          >
            Abstract vector created by vectorjuice - www.freepik.com
          </a>
          <span>|</span>
          <a
            className="footer__href"
            href="https://www.freepik.com/vectors/business"
            target="_blank"
          >
            Business vector created by vectorjuice - www.freepik.com
          </a>
          <span>|</span>
          <a
            className="footer__href"
            href="https://www.freepik.com/vectors/school"
            target="_blank"
          >
            School vector created by vectorjuice - www.freepik.com
          </a>
          <span>|</span>
          <a
            className="footer__href"
            href="https://www.freepik.com/vectors/technology"
            target="_blank"
          >
            Technology vector created by pch.vector - www.freepik.com
          </a>
          <span>|</span>
          <a
            className="footer__href"
            href="https://www.freepik.com/vectors/baby"
            target="_blank"
          >
            Baby vector created by catalyststuff - www.freepik.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
