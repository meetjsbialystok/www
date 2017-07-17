import React from 'react';

import "./pageRegister.scss";

export default class PageRegister extends React.Component {
    render() {
        return (
            <section className="register bgcolor--primary">
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <a className="register--button" href="https://meetjsbialystok.evenea.pl/" target="_blank">Zarejestruj się</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

