import React from 'react';

import PageHeader from './pageHeader.jsx';

export default class PageBody extends React.Component {
  render() {
    return (
      <div className="c-body">
        <PageHeader/>
        {/* <PageIdea/> */}
        {/* <PageAgenda/> */}
      </div>
    );
  }
};