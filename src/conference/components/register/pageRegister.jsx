import React from 'react';

import "./pageRegister.scss"; 

export default class PageHeader extends React.Component {
    render() {
        return (
            <div>
                <section className="register bgcolor--primary">
                    <div className="section">
                        <div className="columns">
                            <div className="column">
                                <a className="register--button">Zarejestruj się</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};

