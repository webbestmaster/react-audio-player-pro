/* global document */

import {render} from 'react-dom';

import {selector} from './const';
import {App} from './component/app/app';

const nodeWrapper = document.querySelector(selector.appWrapper);

if (nodeWrapper !== null) {
    render(<App />, nodeWrapper);
} else {
    console.error('Can not find nodeWrapper');
}
