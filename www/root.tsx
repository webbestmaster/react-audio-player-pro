/* global document */

import {createRoot} from 'react-dom/client';

import {selector} from './const';
import {App} from './component/app/app';

const nodeWrapper = document.querySelector(selector.appWrapper);

if (nodeWrapper !== null) {
    createRoot(nodeWrapper).render(<App />);
} else {
    console.error('Can not find nodeWrapper');
}
