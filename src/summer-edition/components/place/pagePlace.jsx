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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.263356252608!2d23.165949316167538!3d53.14136797993667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc18bc2e5d05%3A0x7bb834c18bd8e62a!2zV3nFvHN6YSBTemtvxYJhIEZpbmFuc8OzdyBpIFphcnrEhWR6YW5pYQ!5e0!3m2!1sen!2spl!4v1499090192075"
            width="100%"
            height="450"
            frameborder="0"
            style={textStyles}
            allowfullscreen
          ></iframe>
        </div>
      </section>
    );
  }
};

