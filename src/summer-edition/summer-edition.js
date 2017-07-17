import React from 'react';
import ReactDOM from 'react-dom';

import './summer-edition.scss';

import throttle from 'lodash.throttle';

import PageBodyComponent from './components/pageBody.jsx';

const CLASSES = {
    HEADER_PATTERN: 'header--pattern',
    HEART_CONTAINER: 'js-container',
    HEART_CLASS: 'global__heart',
    HEART_HERRING_CLASS: 'global__heart--herring',
    HEADER: 'header',
    CLICKER: 'js-clicker',
};

ReactDOM.render(<PageBodyComponent />, document.getElementById('root'));

// Here goes ugly code, because we can!
// DOM refs
const pattern = document.querySelector(`.${CLASSES.HEADER_PATTERN}`);
const container = document.querySelector(`.${CLASSES.HEART_CONTAINER}`);
let heartAlready = false;

// functions
const addElement = (className) => {
    const element = document.createElement('DIV');
    element.classList.add(className);
    document.body.appendChild(element);
    return element;
}

const changeBg = throttle(e => {
    pattern.style.backgroundPosition = `${e.pageX / -20}px ${e.pageY / -20}px`;
}, 25);

const addShape = throttle(e => {
    const heart = addElement(CLASSES.HEART_CLASS);
    heart.style.left = `${e.pageX}px`;
    heart.style.top = `${e.pageY}px`;

    if (heartAlready && Math.random() < 0.15) {
        heart.classList.add(CLASSES.HEART_HERRING_CLASS);
        heartAlready = false;
    }

    heartAlready = true;

    setTimeout(() => {
        heart.remove();
    }, 700);
}, 300);

// event listeners
document.querySelector(`.${CLASSES.HEADER}`).addEventListener('mousemove', changeBg);
document.querySelector(`.${CLASSES.CLICKER}`).addEventListener('click', addShape);