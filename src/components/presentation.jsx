import React from 'react';

export default class Presentation extends React.Component {
  render() {
    const { presentation } = this.props;

    let presentationLink = null;
    if (presentation.link_pres) {
      presentationLink = (
        <a href={presentation.link_pres} target="_blank" className="c-presentation--link">
          <i className="icon icon-dropbox"></i> Prezentacja
        </a>
      );
    }

    let repoLink = null;
    if (presentation.link_repo) {
      repoLink = (
        <a href={presentation.link_repo} target="_blank" className="c-presentation--link">
          <i className="icon icon-github"></i> Repozytorium
        </a>
      );
    }

    return (
      <article className="c-presentation">
        <div className="c-presentation--title">
          {presentation.title}
        </div>
        <div className="c-presentation--author">{presentation.author}, data: {presentation.date}</div>
        <div className="c-presentation--links">
          <span className="c-presentation--links-label">Linki:</span> {presentationLink} {repoLink}
        </div>
      </article>
    );
  }
}