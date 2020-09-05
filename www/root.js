// @flow

/* global document */

import React from 'react';
import {render} from 'react-dom';

import {selector} from './const';
import {App} from './js/component/app/c-app';

const nodeWrapper = document.querySelector(selector.appWrapper);

if (nodeWrapper !== null) {
    render(<App/>, nodeWrapper);
} else {
    console.error('Can not find nodeWrapper');
}

console.log('audio player pro');
