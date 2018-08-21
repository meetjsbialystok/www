import React from 'react';

export default class PageIdea extends React.Component {
  render() {
    return (
      <div>
        <section className="section idea">
          <div className="section-header color--primary margin--bottom margin--top">Idea i szczegóły</div>

          <div className="columns margin--bottom">
            <div className="column content">
              <p>Minęły już ponad trzy lata, odkąd w Białymstoku odbyło się pierwsze spotkanie miłośników technologii front-endowych pod banderą meet.js.</p>

              <p>Poza niezawodnymi partnerami głównym przyczynkiem do sukcesu wydarzenia pozostaje żywa oraz aktywna białostocka społeczność front-endowa. To dzięki niej każda edycja eventu miała niepowtarzalny klimat i kipiała front-endową wiedzą, i to z niej organizatorzy czerpali inspiracje do planowania kolejnych wydarzeń.</p>
            </div>
            <div className="column content">
              <p>I właśnie w formie prezentu dla społeczności organizowana jest specjalna letnią edycja wydarzenia: meet.js++. Wyróżnia się większą skalą, jak i też gośćmi: na scenę zaprosimy najlepszych krajowych specjalistów ze świata front-endowego!</p>
              <p>Ze względu na nieco większą formę spotkania, wyjątkowo wstęp będzie wymagał uprzedniej (darmowej) rejestracji - <a href="https://meetjsbialystok2018.evenea.pl/" target="_blank">zachęcamy zainteresowanych pod ten link</a>. Meet.js++ odbędzie się również wyjątkowo w innym miejscu: tym razem zawędrujemy do Auli Wydziału Matematyki i Informatyki Uniwersytetu w Białymstoku.</p>
              <p>Zapraszamy do rejestracji i zapoznania się z prelegentami oraz agendą!</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

