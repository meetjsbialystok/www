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
                            <div className="agenda__box">
                                <div className="agenda__box__photo">
                                    <img src={require('../../assets/p_norbi_tomek.png')} />
                                </div>
                                <div className="agenda__box__content bgcolor--tertiary">
                                    <div className="agenda__box__name color--green">Norbert Kamieński</div>
                                    <div className="agenda__box__name color--green">Tomasz Chmiel</div>
                                    <div className="agenda__box__company color--white"></div>
                                    <div className="agenda__box__title color--white">Zaawansowany React & Redux</div>
                                </div>
                            </div>
                        </div>

                        <div className="agenda__box-wrapper">
                            <div className="agenda__box">
                                <div className="agenda__box__photo">
                                    <img src={require('../../assets/p_maciek.png')} />
                                </div>
                                <div className="agenda__box__content bgcolor--tertiary">
                                    <div className="agenda__box__name color--green">Maciek Korsan</div>
                                    <div className="agenda__box__company color--white"></div>
                                    <div className="agenda__box__title color--white">Front-End is an Art</div>
                                </div>
                            </div>
                        </div>

                        <div className="agenda__box-wrapper">
                            <div className="agenda__box">
                                <div className="agenda__box__photo">
                                    <img src={require('../../assets/p_lukasz.png')} />
                                </div>
                                <div className="agenda__box__content bgcolor--tertiary">
                                    <div className="agenda__box__name color--green">Łukasz Piotr Łuczak</div>
                                    <div className="agenda__box__company color--white"></div>
                                    <div className="agenda__box__title color--white">Wzorcowe architektoniczne puzzle</div>
                                </div>
                            </div>
                        </div>

                        <div className="agenda__box-wrapper">
                            <div className="agenda__box">
                                <div className="agenda__box__photo">
                                    <img src={require('../../assets/p_lukaszs.png')} />
                                </div>
                                <div className="agenda__box__content bgcolor--tertiary">
                                    <div className="agenda__box__name color--green">Łukasz Stankiewicz</div>
                                    <div className="agenda__box__company color--white"></div>
                                    <div className="agenda__box__title color--white">RxJS: Tailor-made, or is it?</div>
                                </div>
                            </div>
                        </div>

                        <div className="agenda__box-wrapper">
                            <div className="agenda__box">
                                <div className="agenda__box__photo">
                                    <img src={require('../../assets/p_marta.png')} />
                                </div>
                                <div className="agenda__box__content bgcolor--tertiary">
                                    <div className="agenda__box__name color--green">Marta Wiśniewska</div>
                                    <div className="agenda__box__company color--white"></div>
                                    <div className="agenda__box__title color--white">Progressive Web Apps with Ionic - build amazing cross-platform apps, with the web.</div>
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

