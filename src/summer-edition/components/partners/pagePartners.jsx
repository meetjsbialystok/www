import React from 'react';

import "./pagePartners.scss";

export default class PagePartners extends React.Component {
  render() {
    return (
      <div>
        <section className="partners bgcolor--white">
          <div className="section">
            <div className="section-header color--black padding--bottom padding--top">Partnerzy</div>
          </div>
        </section>
        <section className="partners bgcolor--white padding--bottom">
          <div className="section section--centered padding--bottom">
            <div className="partners__header margin--top color--primary">Główny partner wydarzenia</div>
            <div className="partners__logo-list">
              <a href="https://instapage.com/try?mbsy=gpdnZ&campaignid=10005&mbsy_source=73df36cc-a783-486d-b61e-1cae9e6c577f" target="_blank" className="partners__logo">
                <img src={require('../../../assets/logo-ip.png')} />
              </a>
            </div>
          </div>
          <div className="section section--centered">
            <div className="partners__header color--primary">Partnerzy meet.js Białystok</div>
            <div className="partners__logo-list">
              <a href="http://www.infinity-group.pl/en" target="_blank" className="partners__logo">
                <img src={require('../../../assets/logo-ig.png')} />
              </a>
              <a href="https://www.facebook.com/korsanstudio/" target="_blank" className="partners__logo partners__logo--sm">
                <img src={require('../../../assets/logo-korsan.png')} />
              </a>
              <a href="https://www.explorer-hq.com/" target="_blank" className="partners__logo partners__logo--sm">
                <img src={require('../../../assets/logo-ehq.png')} />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

