export const CssData = [
  {
    header: "CSS",
    subHeader:"jak nastyluješ stránku",
    text:
      "Jedná se o zkratku, která znamená Cascading Style Sheets, česky 'kaskádové styly'. CSS může stylovat téměř jakýkoliv tag HTML. Pomocí stylů lze obarvit text a jeho pozadí, nastavit různou velikost textu a různé objekty můžeš umisťovat kamkoliv na stránce.",
    snippetText: `<h1 style="background-color:#FF69B4", "font-size:28px">Růžová</h1>`,
  },

  {
    header: ".background-color",
    subHeader: "jak přidáš barvy",
    text:
      "V základním nastavení je pozadí transparentní tzn. průhledné, to ale není moc zábava. Pokud chceš nastavit barevnost celému prvku, musíš je zadat pomocí speciálního označení, v CSS lze zadat barevnou hodnotu různými způsoby - my využijeme HEX. Barva se zadává s křížkem a šestimístným kódem, který je směsicí čísel a písmen a označuje příslušnou hodnotu na barevné škále. Tak třeba pokud zadáš #FF0000 bude výsledkem krásně červená barva. Barevný HEX kód si můžeš vybrat a zkopírovat třeba z této stránky https://htmlcolorcodes.com/color-chart/flat-design-color-chart/ ",
    snippetText: `<p style="background-color:#ffff1a;">Žlutá</p>`,
  },

  {
    header: ".border",
    subHeader: "jak nastavíš rámeček",
    text:
      "Tato vlastnost nastavuje barevnost celému prvku. Barvy se zadávají pomocí speciálního označení - HEX. Barva se většinou se zadává s křížkem a šestimístným kódem, který je směsicí čísel a písmen a označuje příslušnou hodnotu na barevné škále. Tak třeba pokud zadáš #FF0000 bude výsledkem krásně červená barva. Barevný HEX kód si můžeš vybrat a zkopírovat třeba z této stránky: ",
    snippetText: `<p class="dotted">Tečkovaný rámeček.</p>`
    ,
  },

  {
    header: ".font-family",
    subHeader: "jak bude vypadat písmo",
    text:
      "Zní to legračně, ale existují rodiny písem, jsou to vlastně určité sady písma, které mají společný charakter, takže vypadaji stejně. Rodiny písem se mezi sebou liší svou tloušťkou, sklonem a dalšími vlasnostmi. Používat můžeš spoustu volně dostupných písem, ale musíš je v rámci svojí stránky definovat, nebo na ně přímo odkázat v hlavičce. To si vysvětlíme později. Teď nám bude stačit definovat písmo, které máme v počítači. ",
    snippetText: `<style>
p.text {
  font-family: Georgia, sans-serif;
}
</style>


<p class="text">Písmo může být patkové, bezpatkové, strojové nebo i ručně psané.</p>`,
  },

  {
    header: ".font-size",
    subHeader: "větší nebo menší písmo",
    text:
      "Font-size nastavuje velikost písma - v kódu se používají různé jednotky pro velikosti a je docela lehké se v tom ztratit - my si zatím vystačíme s pixely. Pro pixely se užívá zkratka px, takže pokud budeš chtít větší písmo, napiš jen číslo a za něj přidej značku px.",
    snippetText: `<style>
p.text {
  font-size: 28px;
}
</style>


<p class="text">Velikost písma už je 28px a to není žádné tintítko.</p>`,
  },


];
