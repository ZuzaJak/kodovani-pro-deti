import React from 'react';
import WikiContentHead from './components/WikiContentHead/wiki_head.jsx';
import WikiContentSection from './components/WikiContentSection/wiki_section.jsx';
// import snippet from './components/WikiContentSection/index.jsx';
import WikiContentNavigation from './components/WikiContentNavigation/wiki_navigation.jsx';
import WikiContentTabPanel from "./components/WikiContentTabPanel/WikiTabPanel.jsx";
import { Button } from '@material-ui/core';


 const data = [
   
  
   { header: "<HTML>",
    subHeader: "značkovací jazyk",
    text: "Je to zkratka z anglického Hypertext Markup Language, česky říkáme značkovací jazyk. HTML je taková kostra webové stránky. Skládá se z takzvaných tagů (značek), které se píší pomocí špičatých závorek <>. Tagů je velké množství, na této stránce si ukážeme ty základní a nejdůležitější.",
     snippetText:`<html lang='cs'>
<head>
<title>Ahoj, já jsem název stránky</title>
</head>
<body>
<h1>test</h1>
</body>
</html>`,
    },


    { header: "<BODY>",
    subHeader: "tělo stránky",
    text: "Body znamená tělo. Tag body je tedy takovým tělem stránky. Do tohoto těla stránky píšeme všechny další tagy. Důležité je, že vše, co je uvnitř tagu body, se zobrazuje na webové stránce. Do tohoto tagu body se píší všechny následující tagy.",
    snippetText:`<html lang='cs'>
<head>
<title>Ahoj, já jsem název stránky</title>
</head>
<body>
<h1>test</h1>
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
<h1>test</h1>
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
    <h1>test</h1>
    </body>
    </html>`,
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
          {data.map((section) => (
          <WikiContentSection 
            key={section.header}
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
