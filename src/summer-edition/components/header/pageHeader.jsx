import React from 'react';

import "./pageHeader.scss";

export default class PageHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header--wrapper">
          <div className="header--pattern">
          </div>
          <div className="header--map">
            <div className="header--body js-container">
              <div className="header--logo">
                <img src={require('../../assets/logo.png')} />
              </div>
              <div className="header--text-container">
                <div className="header--edition">special summer edition</div>
                <div className="header--date">26 sierpnia 2017, Białystok</div>
              </div>
              <div className="header--dot js-clicker">
                <div className="header--dot-triangle top"></div>
                <div className="header--dot-triangle left"></div>
                <div className="header--dot-triangle right"></div>
                <div className="header--dot-triangle bottom"></div>
              </div>
              <div className="header--dot shadow">
                <div className="header--dot-triangle top"></div>
                <div className="header--dot-triangle left"></div>
                <div className="header--dot-triangle right"></div>
                <div className="header--dot-triangle bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
};