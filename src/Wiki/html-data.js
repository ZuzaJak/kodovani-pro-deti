export const HtmlData = [

  {
    header: "<HTML>",
    subHeader: "značkovací jazyk",
    text:
      "Je to zkratka z anglického Hypertext Markup Language, česky říkáme značkovací jazyk. HTML je taková kostra webové stránky. Skládá se z takzvaných tagů (značek), které se píší pomocí špičatých závorek <>. Tagů je velké množství, na této stránce si ukážeme ty základní a nejdůležitější.",
    snippetText: `<body>

  <p>Tagů je opravdu velká spousta - tak jdeme na to!</p>

</body>`,
  },
  {
    header: "<body>",
    subHeader:" jak vytvořit tělo stránky",
    text:
      "Body znamená tělo. Tag body je tedy takovým tělem stránky. Do tohoto těla stránky píšeme všechny další tagy. Důležité je, že vše, co je uvnitř tagu body, se zobrazuje na webové stránce. Do tohoto tagu body se píší všechny následující tagy.",
    snippetText: `<body>

    <p>Tady se odehrává všechno důležité.</p>

</body>`,
  },

  {
    header: "<h1>",
    subHeader: "jak napsat opravdu velký nadpis",
    text:
      "Zkratka z anglického heading, nadpis. Tag h1 je nadpis největší, pak jsou ještě nadpisy menší a značí se h2 až h6.",
    snippetText: `<body>

  <h1>Tady bude důležitý nadpis</h1>

</body>`,
  },

  {
    header: "<p>",
    subHeader: "jak psát text",
    text:
      "Prvek <p> definuje odstavec - nebo jednodušeji: prostě kousek textu. Odstavec začíná vždy na novém řádku a prohlížeče automaticky přidávají ještě nějaké prázdné místo před a za tento odstavec. Co to znamená a jak to ovlivňuje vzhled stránky si povíme později. ",
    snippetText: `<body>

  <p>Tady bude třeba věta, řádek nebo i odstavec.</p>

</body>`,
  },

{
    header: "<list>",
    subHeader: "jak si vytvořit seznam ",
    text:
      "List je v angličtině vlastně seznam. Je to seskupení informací, které spolu souvisí. Jsou dva základní seznamy: uspořádaný a neuspořádaný seznam, pořádek musí být ale v obou. Tak například je důležité všechny položky seznamu označit tagem <li></li>. Jedná se o anglickou zkratku List Item a znamená: položka seznamu. Pokud chceme vytvořit seznam, který bude mít odrážky, třeba důležitý nákupní seznam, napíše se před položky seznamu <ul>, na konec pak koncový tag a to </ul>:",
    snippetText: `<body>
  <ul>
    <li>Lentilky</li>
    <li>Gumoví medvídci</li>
    <li>Čokoláda</li>
  </ul>

</body>`,
  },

  {
    header: "<a href>",
    subHeader: "jak kliknout na odkaz",
    text:
      "Odkazy HTML jsou hypertextové odkazy. Můžete kliknout na odkaz a přejít na jiný dokument - odkaz nemusí být jen jiný text, ale může to být obrázek nebo jakýkoliv jiný HTML prvek. Když přejedete myší po odkazu, šipka myši se změní na malou ručičku. Nejdůležitějším atributem prvku <a> je atribut href, který označuje cíl odkazu. Text odkazu je část, která bude viditelná čtenáři stránek.",
    snippetText:`<body>

  <p style="background-color:#FF69B4"><a href="https://www.google.com/">Ahoj, tady klikneš a můžeš další odpovědi hledat v googlu</a></p>

</body>`,
  },
];
