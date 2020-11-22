import React from 'react';
import './about.css';

const About = () => {
  return (
    <div id="about" className="about__main">
      <div className="about__title-flex">
        <span className="bracket"> {'{'}</span>{' '}
        <div className="about__title-bracket-flex">
          <h1 className="about__title">O projektu</h1>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti
            temporibus aliquam est vel mollitia alias laudantium asperiores nemo
            neque nisi veniam, adipisci ut, distinctio ipsum deserunt cum
            consectetur. Et? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nemo facere fugiat et nihil, tempore eos excepturi odio aut
            eveniet corporis. Porro asperiores nostrum nobis repellat, impedit
            quos culpa nihil veniam. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nesciunt alias asperiores nam cum ipsa provident!
            Nulla, qui facere, optio modi aut consequuntur nesciunt asperiores
            similique nisi expedita consequatur voluptatem repellat.
          </p>
        </div>
      </div>
      <div className="about__columns-flex">
        <div className="about__column">
          <h2>{'>  '} pro děti</h2>
          <p>
            Taky už tě napadlo co všechno stojí za tím, že si něco v okně
            počítače můžeš přečíst? Zahrát? Napsat? Abys mohl všechny tyto
            důležité věci dělat, je důležité znát těchto šest tagů. A co je to
            tag? ....
          </p>
        </div>
        <div className="about__column">
          <h2>{'>  '} pro rodiče</h2>
          <p>
            HTML je základ, je to brána do světa všech ostatních počítačových
            jazyků. Kódování v HTML není těžké, důležité je jen začít a navíc
            rozšiřuje mysl a posiluje soustředění. Vytvořit první jednoduchou
            stránku trvá přibližně hodinu. A začít můžete právě tady – i se
            svými dětmi.
          </p>
        </div>
        <div className="about__column">
          <h2>{'>  '} pro učitele</h2>
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
