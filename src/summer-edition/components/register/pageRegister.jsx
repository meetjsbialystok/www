import React from 'react';

import "./pageRegister.scss";

export default class PageRegister extends React.Component {
    render() {
        return (
            <section className="register bgcolor--primary">
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <div className="register__date color--white">25 sierpnia 2018, 9:00</div>
                            <div className="register__place color--white">Aula Wydziału Matematyki i Informatyki Uniwersytetu w Białymstoku</div>
                            <a className="register__button" href="https://meetjsbialystok2018.evenea.pl/" target="_blank">Zarejestruj się</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

