import React from 'react';
import './wiki_head.css';

const WikiContentHead = () => {
  return (
    <div className="wiki">
      <div className="wiki__content">
        <div className="wiki__title-flex">
          <span className="bracket"> {'{'}</span>
          <div className="wiki__title-bracket-flex">
            <h1 className="wiki__title">
              kódovací wikipedie - jak se tvoří webové stránky?
            </h1>
            <p className="wiki__title-text">
              Webové stránky nejsou jen to, co na první pohled vidíme (obrázky,
              barvy, písmena, tlačítka), za každou webovou stránkou se skrývá
              “kód”. Kód je speciální způsob, jakým se tvoří a píší webové
              stránky. Kód píšeme do editoru kódu, takových editorů je velké
              množství, my doporučujeme například
              <a
                className="wiki__vs-link"
                href="https://code.visualstudio.com/"
                target="_blank"
              >
                Visual Studio Code.
              </a>
              Webové stránky si můžeme prohlížet v takzvaném webovém prohlížeči.
              Každý ho jistě zná, je to to “tlačítko pro internet” 🙂. Webový
              prohlížeč dokáže přečíst kód, který někdo napsal, a vytvoří z něho
              webovou stránku, která je pěkná a přehledná. V následujících
              částech se dozvíte, jak vypadá takový kód, kterým se píší webové
              stránky.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WikiContentHead;
