import React from 'react';
import ReactDOM from 'react-dom';

import './conference.scss';

import PageBodyComponent from './components/pageBody.jsx';

ReactDOM.render(<PageBodyComponent />, document.getElementById('root'));



const pattern = document.querySelector('.header--pattern');
document.querySelector('.header').addEventListener('mousemove', function (e) {
    pattern.style.backgroundPosition = `${e.pageX / -20}px ${e.pageY / -20}px`;
});
