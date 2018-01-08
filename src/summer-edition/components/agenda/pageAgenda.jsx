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
                            <div className="agenda__category-name color--primary"></div>
                            <div className="agenda__box">
                                <div className="agenda__box__photo">
                                    <img src={require('../../assets/p_lukasz.png')} />
                                </div>
                                <div className="agenda__box__content bgcolor--tertiary">
                                    <div className="agenda__box__name color--primary">Łukasz Piotr Łuczak</div>
                                    <div className="agenda__box__company color--white">Łódź</div>
                                    <div className="agenda__box__title color--white">Zdradliwy JavaScript - rzecz o nieoczywistościach</div>
                                </div>
                            </div>
                        </div>
                        <div className="agenda__box-wrapper">
                            <div className="agenda__category-name color--primary"></div>
                            <div className="agenda__box">
                                <div className="agenda__box__photo">
                                    <img src={require('../../assets/p_marcin.png')} />
                                </div>
                                <div className="agenda__box__content bgcolor--tertiary">
                                    <div className="agenda__box__name color--primary">Marcin Grzywaczewski</div>
                                    <div className="agenda__box__company color--white">Wrocław</div>
                                    <div className="agenda__box__title color--white">Czego React.js może nauczyć backendowca?</div>
                                </div>
                            </div>
                        </div>
                        <div className="agenda__box-wrapper">
                            <div className="agenda__category-name color--primary"></div>
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
                            <div className="agenda__category-name color--primary"></div>
                            <div className="agenda__box">
                                <div className="agenda__box__photo">
                                    <img src={require('../../assets/p_maciek.png')} />
                                </div>
                                <div className="agenda__box__content bgcolor--tertiary">
                                    <div className="agenda__box__name color--primary">Maciek Korsan</div>
                                    <div className="agenda__box__company color--white">Białystok // PolarBits</div>
                                    <div className="agenda__box__title color--white">Disco JavaScript</div>
                                </div>
                            </div>
                        </div>

                        <div className="agenda__box-wrapper">
                            <div className="agenda__category-name color--primary"></div>
                            <div className="agenda__box">
                                <div className="agenda__box__photo">
                                    <img src={require('../../assets/p_andrzej.png')} />
                                </div>
                                <div className="agenda__box__content bgcolor--tertiary">
                                    <div className="agenda__box__name color--primary">Andrzej Fricze</div>
                                    <div className="agenda__box__company color--white">Kraków // meet.js</div>
                                    <div className="agenda__box__title color--white">Programming is overrated</div>
                                </div>
                            </div>
                        </div>

                        <div className="agenda__box-wrapper">
                        </div>

                    </div>
                </div>
            </section>
        );
    }
};

