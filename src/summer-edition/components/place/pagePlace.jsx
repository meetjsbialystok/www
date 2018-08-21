import React from 'react';

import "./pagePlace.scss";

export default class PagePlace extends React.Component {
  render() {

    var textStyles = Object.assign({},
      { border: '0' }
    );

    return (
      <section className="place bgcolor--primary">
        <div className="section-header color--white padding--bottom padding--top">Lokalizacja</div>
        <div className="font--zero">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2395.1038832730096!2d23.1524842!3d53.1083271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ff959a90975b9%3A0xdebeb13a5184f145!2sWydzia%C5%82+Matematyki+i+Informatyki+Uniwersytetu+w+Bia%C5%82ymstoku+wraz+z+Uniwersyteckim+Centrum+Obliczeniowym!5e0!3m2!1spl!2spl!4v1532562538650"
                width="100%"
                height="450"
                frameBorder="0"
                style={textStyles}
                allowFullScreen
            />
        </div>
      </section>
    );
  }
};

