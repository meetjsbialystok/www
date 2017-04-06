import React from 'react';
import DataService from '../services/dataService.js';

import PresentationComponent from './presentation.jsx';

export default class PageBody extends React.Component {
  constructor() {
    super();
    this.setState({
      presentations: null,
      isLoading: true,
    });

    DataService.getPresentations().then((data) => {
      console.info("MAMY PREZ W KOMPO", data);
      this.setState({
        presentations: data.presentations,
        isLoading: false,
      });
    });
  }

  render() {
    let presentationsMarkup = null;
    if (Array.isArray(this.state.presentations)) {
      presentationsMarkup = this.state.presentations.map(
        presentation => <PresentationComponent presentation={presentation}/>
      );
    }

    return <div className="c-wrapper">
        <aside className="c-sidebar">
          <div className="c-sidebar--logo"></div>
          <div className="c-sidebar--disclaimer">

          </div>
        </aside>
        <section className="c-body">
          <h2>Prezentacje</h2>
          <div className="c-presentation-list">
            {presentationsMarkup}
          </div>
        </section>
      </div>
    }
};