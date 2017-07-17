import React from 'react';

import "./pageCfp.scss";

export default class PageCfp extends React.Component {
    render() {
        return (
            <div>
                <a name="cfp"></a>
                <section className="cfp bgcolor--white">
                    <div className="section">
                        <div className="section-header color--secondary padding--bottom padding--top cfp__header">
                            Call for papers!
                            <div className="cfp__arrow">
                                <img src={require('../../assets/arrow.png')}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cfp bgcolor--primary">
                    <div className="section columns content color--white padding--top padding--bottom">
                        <div className="column">
                            <p className="cfp__p">Chciabyś wystąpić na większej scenie w towarzystwie Marcina, Kuby i nie tylko? Masz pomysł na prezentację? Nie zwlekaj - wrzucaj zgłoszenie już teraz na: </p>
                            <div className="cfp__email">meetjsbialystok@gmail.com</div>
                            <p className="cfp__p">Z przyjemnością przyjmiemy zarówno tematy miękkie, jak i bardziej techniczne. Czas trwania prezentacji: 30-60 minut. Do dnia 13 sierpnia postaramy się dokonać przeglądu zgłoszeń i poinformować o dalszych planach. </p>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
};

