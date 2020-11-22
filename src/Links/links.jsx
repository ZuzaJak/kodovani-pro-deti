import React from 'react';
import './links.css';
import links from '../img/links.png';

const Links = () => {
  return (
    <div id="links" className="links">
      <div className="links__title-flex">
        <span className="bracket"> {'{'}</span>{' '}
        <div className="links__title-bracket-flex">
          <h1 className="links__title">Kam dál?</h1>
          <p className="links__text">
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
      <div className="links__list-flex">
        <div className="links__lists">
          <div className="links__list">
            <h2>více učení</h2>
            <a
              href="https://www.czechitas.cz/cs/co-delame/czechitas-nova-generace"
              target="_blank"
            >
              Czechitas Nová Generace
            </a>
            <a href="https://witches.fel.cvut.cz/" target="_blank">
              wITches
            </a>

            <a href="https://www.imysleni.cz/" target="_blank">
              iMYŠLENÍ.cz
            </a>
          </div>
          <div className="links__list">
            <h2>více her a zábavy</h2>
            <a
              href="https://decko.ceskatelevize.cz/datova-lhota"
              target="_blank"
            >
              Datová Lhota - v počítači to žije!
            </a>
            <a href="https://scratch.mit.edu/" target="_blank">
              SCRATCH
            </a>
            <a href="https://code.org/" target="_blank">
              code.org
            </a>
            <a href="https://flexboxfroggy.com/#cs" target="_blank">
              Flexbox Froggy
            </a>
          </div>
          <div className="links__list">
            <h2>a něco v angličtině</h2>
            <a href="https://eraseallkittens.com/" target="_blank">
              Erase All Kittens
            </a>
          </div>
        </div>
        <img className="links__img" src={links} alt="obrázek" />
      </div>
    </div>
  );
};
export default Links;
