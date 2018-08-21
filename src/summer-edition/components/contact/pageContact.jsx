import React from 'react';

import "./pageContact.scss";

export default class PageContact extends React.Component {
  render() {
    return (
      <section className="contact bgcolor--secondary padding--bottom">
        <div className="section-header color--white padding--bottom padding--top">Kontakt</div>
        <div className="section section--centered content columns color--white">
          <div className="column contact__person">
            <div className="contact__name color--white">Karol Rogowski</div>
            <div className="contact__data">karol.rogowski@gmail.com</div>
            <div className="contact__data">+48 609 576 084</div>
          </div>
            <div className="column contact__person">
                <div className="contact__name color--white">Przemysław Wiszowaty</div>
                <div className="contact__data">p@wiszowaty.ovh</div>
                <div className="contact__data">+48 505 219 939</div>
            </div>
        </div>
      </section>
    );
  }
};

