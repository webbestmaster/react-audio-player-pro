// @flow

/* global document, Event, HTMLTextAreaElement, HTMLDivElement, HTMLPreElement, HTMLInputElement */

import {init} from './init';
import defaultMarkdown from './demo.md';

const input = document.querySelector('.js-input');
const output = document.querySelector('.js-output');
const outputDebug = document.querySelector('.js-output-debug');
const useLineBreak = document.querySelector('.js-use-line-break');
const parseLink = document.querySelector('.js-parse-link');

if (
    input instanceof HTMLTextAreaElement
    && output instanceof HTMLDivElement
    && outputDebug instanceof HTMLPreElement
    && useLineBreak instanceof HTMLInputElement
    && parseLink instanceof HTMLInputElement
) {
    input.textContent = defaultMarkdown;

    init(input, output, outputDebug, useLineBreak, parseLink);

    input.dispatchEvent(new Event('input'));
}
