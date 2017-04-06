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
      <div className="c-wrapper">
        <aside className="c-sidebar">
          <div className="c-sidebar--logo"></div>
          <div className="c-sidebar--info">
            Niniejsza strona służy jako repozytorium prezentacji, które pokazywane były dotychczas na deskach białostockich spotkań meet.js.
            <a href="https://www.facebook.com/groups/javascript.bialystok/" target="_blank" className="c-sidebar--info-link">
              <i className="icon icon-facebook"></i> JavaScript i front-end Białystok
            </a>
            {nextMeetingMarkup}
          </div>
        </aside>
        <section className="c-body">
          <h2>Prezentacje</h2>
          <div className="c-presentation-list">
            {presentationsMarkup}
          </div>
        </section>
      </div>
    );
  }
};