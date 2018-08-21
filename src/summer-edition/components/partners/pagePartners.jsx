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
          <div className="section section--centered">
            <div className="partners__logo-list">
            <a href="https://instapage.com/" target="_blank" className="partners__logo">
                <img src={require('../../../assets/logo-ip.png')} />
            </a>
            <a href="https://pagepro.co/" target="_blank" className="partners__logo">
                <img src={require('../../../assets/logo-pp.jpg')} />
            </a>
              <a href="http://www.infinity-group.pl/" target="_blank" className="partners__logo">
                <img src={require('../../../assets/logo-ig.png')} />
              </a>
            </div>
              <div className="partners__logo-list">
                  <a href="https://www.facebook.com/korsanstudio/" target="_blank" className="partners__logo partners__logo--sm">
                      <img src={require('../../../assets/logo-korsan.png')} />
                  </a>
                  <a href="http://www.uwb.edu.pl/" target="_blank" className="partners__logo partners__logo--sm">
                      <img src={require('../../../assets/logo-wydzial-iim.jpg')} />
                  </a>
              </div>
          </div>
        </section>
      </div>
    );
  }
};

