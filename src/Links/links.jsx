import React from 'react';
import './links.css';
import links from '../img/links.png';
import icon from '../img/icon/link_out_icon.png';

const Links = () => {
  return (
    <div id="links" className="links">
      <div className="links__title-flex">
        <span className="bracket"> {'{'}</span>{' '}
        <div className="links__title-bracket-flex">
          <h1 className="links__title">kam dál?</h1>
          <p className="links__text">
            Jestli tě tvorba webu zaujala, uč se dál, ať jsi jednou mistrem!
            Tady najdeš spoustu odkazů, které tě dovedou na různé stránky. Pokud
            máš zájem o více učení, více her a zábavy, či se nezalekneš ani
            odkazů a her v angličtině, jsi tu správně!
          </p>
        </div>
      </div>
      <div className="links__list-flex">
        <div className="links__lists">
          <div className="links__list">
            <div className="links__icons-flex">
              <i class="fas fa-laptop-code"></i>
              <h2>více učení</h2>
            </div>
            <a
              href="https://www.czechitas.cz/cs/co-delame/czechitas-nova-generace"
              target="_blank"
            >
              Czechitas Nová Generace
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://cs.khanacademy.org/computing" target="_blank">
              Khan Academy - Počítačové vědy
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://witches.fel.cvut.cz/" target="_blank">
              wITches
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://www.coderebels.cz/" target="_blank">
              CODE Rebels
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://www.kidscodr.cz/" target="_blank">
              KidsCodr
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://www.imysleni.cz/" target="_blank">
              iMYŠLENÍ.cz
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://edu.ceskatelevize.cz/predmet/ict" target="_blank">
              ČT edu - ICT
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
          </div>
          <div className="links__list">
            <div className="links__icons-flex">
              <i class="fas fa-gamepad"></i>
              <h2>více her a zábavy</h2>
            </div>
            <a
              href="https://decko.ceskatelevize.cz/datova-lhota"
              target="_blank"
            >
              Datová Lhota - v počítači to žije!
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://scratch.mit.edu/" target="_blank">
              SCRATCH
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://code.org/" target="_blank">
              code.org
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://makecode.microbit.org/" target="_blank">
              MakeCode
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://flexboxfroggy.com/#cs" target="_blank">
              Flexbox Froggy
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
          </div>
          <div className="links__list">
            <div className="links__icons-flex">
              <i class="fas fa-globe"></i>
              <h2>a něco v angličtině</h2>
            </div>
            <a href="https://edu.google.com/code-with-google/" target="_blank">
              Code with Google
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://www.codecademy.com/" target="_blank">
              Codecademy
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="http://www.stencyl.com/" target="_blank">
              Stencyl
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="http://www.crunchzilla.com/code-monster" target="_blank">
              Code Monster from Crunchzilla
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://eraseallkittens.com/" target="_blank">
              Erase All Kittens
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a
              href="https://geddski.teachable.com/p/flexbox-zombies"
              target="_blank"
            >
              Flexbox Zombies
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://gridcritters.com/" target="_blank">
              Grid Critters
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a
              href="https://easycodesforkids.com/category/html/"
              target="_blank"
            >
              Easy codes for kids
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a
              href="https://apps.apple.com/us/app/hopster-coding-safari-for-kids/id1348232140"
              target="_blank"
            >
              Hopster Coding Safari for Kids
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
            <a href="https://codecombat.com/" target="_blank">
              CodeCombat
              <img src={icon} className="icon_link_out" alt="ikona odkazu" />
            </a>
          </div>
        </div>
        <img className="links__img" src={links} alt="obrázek" />
      </div>
    </div>
  );
};
export default Links;
