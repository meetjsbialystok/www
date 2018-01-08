import React from 'react';
import DataService from '../services/dataService.js';

import PresentationComponent from './presentation.jsx';

export default class PageBody extends React.Component {
  constructor() {
    super();
    this.setState({
      presentations: null,
      isLoading: true,
      nextMeeting: null,
    });

    DataService.getPresentations().then((data) => {
      this.setState({
        nextMeeting: data.nextMeeting,
        presentations: data.presentations,
        isLoading: false,
      });
    });
  }

  render() {
    let nextMeetingMarkup = null;
    if (this.state.nextMeeting) {
      nextMeetingMarkup = (
        <div className="c-sidebar--info-meeting">
          <h3>Termin następnego spotkania:</h3>
          <a className="c-sidebar--info-meeting-link" href={this.state.nextMeeting.link} target="_blank">{this.state.nextMeeting.date}</a>
        </div>
      );
    }

    let presentationsMarkup = null;
    if (Array.isArray(this.state.presentations)) {
      presentationsMarkup = this.state.presentations.map(
        presentation => <PresentationComponent presentation={presentation}/>
      );
    }

    return (
      <div>
        <div className="c-wrapper">
          <aside className="c-sidebar">
            <div className="c-sidebar--logo"></div>
            <div className="c-sidebar--info">
              Niniejsza strona służy jako repozytorium prezentacji, które pokazywane były dotychczas na deskach białostockich spotkań meet.js.
              <a href="https://www.facebook.com/groups/javascript.bialystok/" target="_blank" className="c-sidebar--info-link">
                <i className="icon icon-facebook"></i> JavaScript i front-end Białystok
              </a>
              {nextMeetingMarkup}
              <div className="c-sidebar--info-your-pres">
                <h4>Masz pomysł na prezentację? Napisz:</h4>
                <a className="c-sidebar--info-email" href="mailto:hubert.zub@gmail.com" target="_blank">hubert.zub@gmail.com</a>
                <a className="c-sidebar--info-email" href="karol.rogowski@gmail.com" target="_blank">karol.rogowski@gmail.com</a>
              </div>
            </div>
          </aside>
          <section className="c-body">
            <h2>Prezentacje</h2>
            <div className="c-presentation-list">
              {presentationsMarkup}
            </div>
          </section>
        </div>
        <footer className="c-footer">
          <h3 className="c-footer--header">Partnerzy</h3>
          <div className="c-footer--logo-row">

            <a href="https://instapage.com/try?mbsy=gpdnZ&campaignid=10005&mbsy_source=73df36cc-a783-486d-b61e-1cae9e6c577f" target="_blank" className="c-footer--logo is-w logo-ip">
            </a>

            <a href="http://www.infinity-group.pl/en" target="_blank" className="c-footer--logo is-w logo-ig">
            </a>

            <a href="http://www.operationalrisksolutions.com/en/" target="_blank" className="c-footer--logo is-w logo-op">
            </a>

            <a href="https://www.explorer-hq.com/" target="_blank" className="c-footer--logo logo-ehq">
            </a>

            <a href="https://www.facebook.com/korsanstudio/" target="_blank" className="c-footer--logo logo-ks">
            </a>

          </div>
        </footer>
      </div>
    );
  }
};