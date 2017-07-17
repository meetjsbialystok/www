import React from 'react';

import "./pageContact.scss";

export default class PageContact extends React.Component {
  render() {
    return (
      <section className="contact bgcolor--secondary padding--bottom">
        <div className="section-header color--white padding--bottom padding--top">Kontakt do organizatorów</div>
        <div className="section section--centered content columns color--white">
          <div className="column contact__person">
            <div className="contact__name color--white">Hubert Zub</div>
            <div className="contact__data">hubert.zub@gmail.com</div>
            <div className="contact__data">+48 881 326 117</div>
          </div>
          <div className="column contact__person">
            <div className="contact__name color--white">Karol Rogowski</div>
            <div className="contact__data">karol.rogowski@gmail.com</div>
            <div className="contact__data">+48 609 576 084</div>
          </div>
        </div>
      </section>
    );
  }
};

