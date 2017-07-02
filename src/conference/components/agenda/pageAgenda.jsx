import React from 'react';

import "./pageAgenda.scss";

export default class PageAgenda extends React.Component {
    render() {
        return (
            <div>
                <section className="agenda bgcolor--secondary">
                    <div className="section">
                        <div className="section-header color--white padding--bottom padding--top">Agenda</div>

                        <div className="agenda__container">
                            <div className="agenda__box-wrapper">
                                <div className="agenda__category-name color--primary">Keynote</div>
                                <div className="agenda__box">
                                    <div className="agenda__box__photo">
                                        <img src={require('../../assets/p_damian.png')} />
                                    </div>
                                    <div className="agenda__box__content bgcolor--tertiary">
                                        <div className="agenda__box__name color--primary">Damian Wielgosik</div>
                                        <div className="agenda__box__company color--white">Functionite // Warszawa</div>
                                        <div className="agenda__box__title color--white">There goes beautiful name of the talk!</div>
                                    </div>
                                </div>
                            </div>
                            <div className="agenda__box-wrapper">
                                <div className="agenda__category-name color--primary">Strefa techniki</div>
                                <div className="agenda__box">
                                    <div className="agenda__box__photo">
                                        <img src={require('../../assets/p_marcin.png')} />
                                    </div>
                                    <div className="agenda__box__content bgcolor--tertiary">
                                        <div className="agenda__box__name color--primary">Marcin Grzywaczewski</div>
                                        <div className="agenda__box__company color--white">Arkency // Wrocław</div>
                                        <div className="agenda__box__title color--white">There goes beautiful name of the talk!</div>
                                    </div>
                                </div>
                            </div>
                            <div className="agenda__box-wrapper">
                                <div className="agenda__category-name color--primary">Strefa egzotyki</div>
                                <div className="agenda__box">
                                    <div className="agenda__box__photo">
                                        <img src={require('../../assets/p_kuba.png')} />
                                    </div>
                                    <div className="agenda__box__content bgcolor--tertiary">
                                        <div className="agenda__box__name color--primary">Jakub Gutkowski</div>
                                        <div className="agenda__box__company color--white">blog.gutek.pl</div>
                                        <div className="agenda__box__title color--white">There goes beautiful name of the talk!</div>
                                    </div>
                                </div>
                            </div>
                            <div className="agenda__box-wrapper">
                                <div className="agenda__category-name color--primary">Strefa lokalna</div>
                                <div className="agenda__box">
                                    <div className="agenda__box__photo">
                                        <img src={require('../../assets/p_sam.png')} />
                                    </div>
                                    <div className="agenda__box__content bgcolor--tertiary">
                                        <div className="agenda__box__name color--primary">Twoje nazwisko</div>
                                        <div className="agenda__box__company color--white">Białystok!</div>
                                        <div className="agenda__box__title color--white">There goes beautiful name of the talk!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};

