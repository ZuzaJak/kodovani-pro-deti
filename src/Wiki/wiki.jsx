import React from "react";
import WikiContentHead from "./components/WikiContentHead/wiki_head.jsx";
import {
  HtmlWikiContentSection,
  CssWikiContentSection,
} from "./components/WikiContentSection/wiki_section.jsx";
import WikiContentNavigation from "./components/WikiContentNavigation/wiki_navigation.jsx";
import { ButtonBase } from "@material-ui/core";
import { HtmlData } from "./html-data";
import { CssData } from "./css-data";

const HtmlUkazka = [
  {
    header: "Jak se tady vyznat",
    subHeader: "co a jak používáme",
    text:
      "Začátky bývají těžké, ale každý jednou začínal. Aby to učení bylo o fous lehčí, tady najdeš praktické ukázky kódu s vysvětlením. U každého příkladu tagu nebo vlastosti najdeš vždy dva rámečky - rámeček s kódem, který si můžeš jednoduše překopírovat do své stránky a vše si tak vyzkoušet. A druhý rámeček ve kterém uvidíš výsledek, který se zobrazí na webové stránce. Každá stránka začíná stále stejnými tagy - ty ukazujeme pouze v prvním příkladu, protože jsou stále stejné, jedná se o prvních pět řádků a můžeš si je zkopírovat do stránky přímo odsud.",
    snippetText: `<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Ahoj, já jsem název stránky a nezobrazuji se</title>
</head>
<body>

<p>....můžemem začít za 3, 2, 1 ...</p>

</body>

</html>`,
  },
];

const Wiki = () => (
  <div id="wiki">
    <main>
      <WikiContentHead />
      <WikiContentNavigation />
      <ButtonBase />
      {HtmlUkazka.map((section) => (
        <HtmlWikiContentSection
          key={section.header}
          header={section.header}
          subHeader={section.subHeader}
          text={section.text}
          snippetText={section.snippetText}
        />
      ))}
      {HtmlData.map((section) => (
        <HtmlWikiContentSection
          key={section.header}
          header={section.header}
          subHeader={section.subHeader}
          text={section.text}
          snippetText={section.snippetText}
        />
      ))}
      {CssData.map((section) => (
        <CssWikiContentSection
          key={section.header}
          header={section.header}
          subHeader={section.subHeader}
          text={section.text}
          snippetText={section.snippetText}
        />
      ))}
    </main>
  </div>
);

export default Wiki;
