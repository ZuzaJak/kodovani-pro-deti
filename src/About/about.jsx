import React from 'react';
import './about.css';
import ChildCare from '@material-ui/icons/ChildCare';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import School from '@material-ui/icons/School';

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
            možnostmi dalšího vzdělávání v tomto oboru. Zdrojů v českém jazyce
            není nikdy dost a to zejména ty, které jsou vhodné i pro menší děti.
            HTML a CSS jsou základní a poměrně jednoduché kódovací jazyky, které
            mohou dětem otevřít bránu do světa IT.
          </p>
        </div>
      </div>
      <div className="about__columns-flex">
        <div className="about__column">
          <div className="about__column-header-icon">
            <ChildCare
              className="material-icons"
              style={{ fontSize: '50px', color: '#0d0638' }}
            ></ChildCare>
            <h2 className="about_header">pro děti</h2>
          </div>
          <p>
            Taky už tě napadlo co všechno stojí za tím, že si něco v okně
            počítače můžeš přečíst? Zahrát? Napsat? A ne, nemusíš být úplně
            nejlepší v matematice, kódování je totiž kreativní činnost, u které
            si taky můžeš užít spoustu zábavy - stejně jako malování na papír.
          </p>
        </div>
        <div className="about__column">
          <div className="about__column-header-icon">
            <SupervisedUserCircle
              className="material-icons"
              style={{ fontSize: '50px', color: '#0d0638' }}
            ></SupervisedUserCircle>
            <h2 className="about_header">pro rodiče</h2>{' '}
          </div>
          <p>
            HTML je základ, je to brána do světa všech ostatních počítačových
            jazyků. Kódování v HTML není těžké, důležité je jen začít. Navíc
            rozšiřuje myšlení a posiluje soustředění. Vytvořit první jednoduchou
            stránku trvá přibližně hodinu. A začít můžete právě tady – i se
            svými dětmi.
          </p>
        </div>
        <div className="about__column">
          <div className="about__column-header-icon">
            <School
              className="material-icons"
              style={{ fontSize: '50px', color: '#0d0638' }}
            ></School>
            <h2 className="about_header">pro učitele</h2>{' '}
          </div>
          <p>
            Chcete vašim žákům ukázat možnosti tvorby webu? Je to snadné. Pomocí
            HTML a CSS můžeme poměrně snadno tvořit jednoduché stránky. Tento
            projekt má za cíl zpřístupnit informace o tomto oboru i mladším
            dětem, a to jednoduchou, srozumitelnou a hravou formou.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
