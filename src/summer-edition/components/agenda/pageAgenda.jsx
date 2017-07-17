import React from 'react';

import "./pageAgenda.scss";

export default class PageAgenda extends React.Component {
    render() {
        return (
            <section className="agenda bgcolor--secondary">
                <div className="section">
                    <div className="section-header color--white padding--bottom padding--top">Agenda</div>

                    <div className="agenda__container">
                        <div className="agenda__box-wrapper">
                            <div className="agenda__category-name color--primary">Strefa egzotyki</div>
                            <div className="agenda__box">
                                <div className="agenda__box__photo">
                                    <img src={require('../../assets/p_kuba.png')} />
                                </div>
                                <div className="agenda__box__content bgcolor--tertiary">
                                    <div className="agenda__box__name color--primary">Jakub Gutkowski</div>
                                    <div className="agenda__box__company color--white">Warszawa // blog.gutek.pl</div>
                                    <div className="agenda__box__title color--white">Elixir miłości</div>
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
                                    <div className="agenda__box__company color--white">Wrocław</div>
                                    <div className="agenda__box__title color--primary">Nazwa prezentacji już wkrótce</div>
                                </div>
                            </div>
                        </div>
                        <div className="agenda__box-wrapper">
                            <div className="agenda__category-name color--primary">&nbsp;</div>
                            <div className="agenda__box">
                                <div className="agenda__box__photo">
                                    <img src={require('../../assets/p_tba.png')} />
                                </div>
                                <div className="agenda__box__content bgcolor--tertiary">
                                    <div className="agenda__box__name color--primary"></div>
                                    <div className="agenda__box__company color--white"></div>
                                    <div className="agenda__box__title color--primary">Informacje o prelegencie już wkrótce</div>
                                </div>
                            </div>
                        </div>
                        <div className="agenda__box-wrapper">
                            <div className="agenda__category-name color--primary">Strefa lokalna</div>
                            <div className="agenda__box">
                                <div className="agenda__box__photo">
                                    <img src={require('../../assets/p_sam.png')} />
                                </div>
                                <div className="agenda__box__content bgcolor--primary">
                                    <div className="agenda__box__name color--secondary">Twoje nazwisko!</div>
                                    <div className="agenda__box__company color--white">Białystok!</div>
                                    <div className="agenda__box__title color--white">Nazwa Twojej prezentacji</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};
