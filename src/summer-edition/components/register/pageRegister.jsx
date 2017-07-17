import React from 'react';

import "./pageRegister.scss";

export default class PageRegister extends React.Component {
    render() {
        return (
            <section className="register bgcolor--primary">
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <div className="register__date color--white">26 sierpnia 2017, 12:00</div>
                            <div className="register__place color--white">Aula Duża Wyższej Szkoły Finansów i Zarządzania</div>
                            <a className="register__button" href="https://meetjsbialystok.evenea.pl/" target="_blank">Zarejestruj się</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

