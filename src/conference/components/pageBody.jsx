import React from 'react';

import PageHeader from './header/pageHeader.jsx';
import PageIdea from './idea/pageIdea.jsx';
import PageRegister from './register/pageRegister.jsx';
import PageAgenda from './agenda/pageAgenda.jsx';
import PageCfp from './cfp/pageCfp.jsx';

export default class PageBody extends React.Component {
  render() {
    return (
      <div className="c-body">
        <PageHeader/>
        <PageIdea/>
        <PageRegister/>
        <PageAgenda/>
        <PageCfp/>
      </div>
    );
  }
};