// @flow

/* global window */

// import markdownPro from 'markdown-pro';
// import markdownProStyle from 'markdown-pro/dist/style.css';
import markdownPro from '../src/markdown';

import {debounce, formatHtml, syncScroll, updateScrollPositionCache} from './util';

export function init(
    textArea: HTMLTextAreaElement,
    output: HTMLDivElement,
    outputDebug: HTMLPreElement,
    useLineBreak: HTMLInputElement,
    parseLink: HTMLInputElement
) {
    function refreshResult() {
        updateScrollPositionCache([textArea, output]);
        syncScroll(textArea, output);
    }

    function handleInput() {
        const inputValue = textArea.value;

        const markdownHtml = markdownPro(inputValue, {
            useLineBreak: useLineBreak.checked,
            parseLink: parseLink.checked,
        });

        // eslint-disable-next-line no-param-reassign
        output.innerHTML = markdownHtml;
        // eslint-disable-next-line no-param-reassign
        outputDebug.textContent = formatHtml(markdownHtml);
        refreshResult();
    }

    function handleScroll(evt: Event) {
        // $FlowFixMe
        const element: HTMLElement = evt.currentTarget;

        if (element === textArea) {
            syncScroll(textArea, output);
        } else {
            syncScroll(output, textArea);
        }
    }

    textArea.addEventListener('input', handleInput, false);

    textArea.addEventListener('scroll', handleScroll, {passive: true});
    output.addEventListener('scroll', handleScroll, {passive: true});
    output.addEventListener(
        'scroll',
        debounce((evt: Event) => {
            updateScrollPositionCache([textArea, output]);
            handleScroll(evt);
        }, 200),
        {passive: true}
    );

    useLineBreak.addEventListener('change', handleInput, false);
    parseLink.addEventListener('change', handleInput, false);

    window.addEventListener('resize', refreshResult, false);
}
