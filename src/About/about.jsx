import React from 'react';
import './about.css';

const About = () => {
  return (
    <div id="about" className="about__main">
      <div className="about__title-flex">
        <span className="bracket"> {'{'}</span>{' '}
        <div className="about__title-bracket-flex">
          <h1 className="about__title">o projektu</h1>
          <p className="about__text">
            Projekt {'<kódování pro děti />'} má za cíl jednoduchou a hravou
            formou seznámit děti s tvorbou webu, způsoby, jakými se web tvoří a
            možnostmi dalšího vzdělávání v tomto oboru. Zdrojů v českém jazyce není nikdy dost a to zejména ty, které jsou vhodné i pro menší děti. Nemusíte být druhý Mark Zuckerberg, ale pořád platí, že HTML a CSS jsou základní programovací jazyky a určitě se hodí v nich alespoň trochu orientovat.
          </p>
        </div>
      </div>
      <div className="about__columns-flex">
        <div className="about__column">
          <h2 className="about_header">{'>  '} pro děti</h2>
          <p>
            Taky už tě napadlo co všechno stojí za tím, že si něco v okně
            počítače můžeš přečíst? Zahrát? Napsat? Abys mohl všechny tyto
            důležité věci dělat, je důležité znát těchto šest tagů. A co je to
            tag? ....
          </p>
        </div>
        <div className="about__column">
          <h2 className="about_header">{'>  '} pro rodiče</h2>
          <p>
            HTML je základ, je to brána do světa všech ostatních počítačových
            jazyků. Kódování v HTML není těžké, důležité je jen začít a navíc
            rozšiřuje mysl a posiluje soustředění. Vytvořit první jednoduchou
            stránku trvá přibližně hodinu. A začít můžete právě tady – i se
            svými dětmi.
          </p>
        </div>
        <div className="about__column">
          <h2 className="about_header">{'>  '} pro učitele</h2>
          <p>
            Je to jednoduché. Pomocí základních značek v HMTL můžeme vytvářet
            skvělé stránky. CSS je jazyk, který nám pomůže změnit vhled našich
            stránek. Javascript se pak hodí k tomu, aby stránky byly dynamické a
            interaktivní.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
