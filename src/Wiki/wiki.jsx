import React from 'react';
import WikiContentHead from './components/WikiContentHead/wiki_head.jsx';
import { HtmlWikiContentSection,CssWikiContentSection } from './components/WikiContentSection/wiki_section.jsx';
import WikiContentNavigation from './components/WikiContentNavigation/wiki_navigation.jsx';
import WikiContentTabPanel from "./components/WikiContentTabPanel/WikiTabPanel.jsx";
import { Button } from '@material-ui/core';





 const HtmlData = [
   { header: "<HTML>",
    subHeader: "značkovací jazyk",
    text: "Je to zkratka z anglického Hypertext Markup Language, česky říkáme značkovací jazyk. HTML je taková kostra webové stránky. Skládá se z takzvaných tagů (značek), které se píší pomocí špičatých závorek <>. Tagů je velké množství, na této stránce si ukážeme ty základní a nejdůležitější.",
     snippetText:`<html lang='cs'>
<head>
<title>Ahoj, já jsem název stránky a nezobrazuji se</title>
</head>
<body>

<p>Tagů je opravdu velká spousta - tak jdeme na to!</p>

</body>
</html>`,
    },

    { header: "<BODY>",
    subHeader: "tělo stránky",
    text: "Body znamená tělo. Tag body je tedy takovým tělem stránky. Do tohoto těla stránky píšeme všechny další tagy. Důležité je, že vše, co je uvnitř tagu body, se zobrazuje na webové stránce. Do tohoto tagu body se píší všechny následující tagy.",
    snippetText:`<html lang='cs'>
<head>
<title>Název stránky</title>
</head>
<body>

Tady se odehrává všechno důležité.

</body>
</html>`,
    },
    
    { header: "<H1>",
    subHeader: "opravdu velký nadpis",
    text: "Zkratka z anglického heading, nadpis. Tag h1 je nadpis největší, pak jsou ještě nadpisy menší a značí se h2 až h6.",
    snippetText:`<html lang='cs'>
<head>
<title>Ahoj, já jsem název stránky</title>
</head>
<body>

<h1>Tady bude něco důležitého</h1>

</body>
</html>`,
    },

    { header: "<p>",
    subHeader: "jak psát text",
    text: "Prvek HTML <p> definuje odstavec. Odstavec začíná vždy na novém řádku a prohlížeče automaticky přidávají nějaké prázdné místo (okraj) před a za odstavec.",
    snippetText:`<html lang='cs'>
<head>
<title>Ahoj, já jsem název stránky</title>
</head>
<body>
    
<p>Tady bude třeba věta, řádek nebo i odstavec.</p>
    
</body>
</html>`,
    },
 ]



const CssData =  [

    { header: "background-color",
    subHeader: "chceš barevný nadpis?",
    text:"Tato vlastnost nastavuje barevnost celému prvku. Barvy se zadávají pomocí speciálního označení - HEX. Barva se většinou se zadává s křížkem a šestimístným kódem, který je směsicí čísel a písmen a označuje příslušnou hodnotu na barevné škále. Tak třeba pokud zadáš #FF0000 bude výsledkem krásně červená barva. Barevný HEX kód si můžeš vybrat a zkopírovat třeba z této stránky: ",
    snippetText:`<h1 style="background-color:	#FF69B4;">Růžová</h1>`
    },

    { header: "border",
    subHeader: "nastav rámeček",
    text:" Vlastnosti rámečku umožňují nastavit styl, šířku a barvu ohraničení prvku.Vlastnost stylu ohraničení určuje, jaký druh orámování rámečku se má zobrazit. Mohou se použít následující hodnoty: tečkovaný - nastaví tečkovaný okraj dashed - nastaví přerušované ohraničení plné - Definuje plné ohraničení",
    snippetText:`<p class="dotted">Tečkovaný rámeček.</p>`
    },




]



const Wiki = () => {
  return (
   <>
      <div id="wiki">
        <main>
          <WikiContentHead />
          <WikiContentNavigation />
          <Button />
          <WikiContentTabPanel />
          {HtmlData.map((section) => (
          <HtmlWikiContentSection 
            key={section.header}
            header={section.header}
            subHeader={section.subHeader}
            text={section.text} 
            snippetText={section.snippetText}
            />))}
            {CssData.map((section) => (
              <CssWikiContentSection 
                  key={section.subHeader}
                  header={section.header}
                  subHeader={section.subHeader}
                  text={section.text} 
                  snippetText={section.snippetText}
                />
          ))}
        </main>
      </div>
    </>
  );
};

export default Wiki;
