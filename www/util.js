// @flow

/* global setTimeout, clearTimeout */

// get from stackoverflow
// https://stackoverflow.com/questions/3913355/how-to-format-tidy-beautify-in-javascript
export function formatHtml(html: string): string {
    const tab: string = '\t';

    let result: string = '';

    let indent: string = '';

    html.split(/>\s*</).forEach((element: string) => {
        if (element.match(/^\/\w/)) {
            indent = indent.slice(tab.length);
        }

        result += indent + '<' + element + '>\r\n';

        if (element.match(/^<?\w[^>]*[^/]$/)) {
            indent += tab;
        }
    });

    return result.slice(1, -3);
}

type ScrollPositionType = {|
    +scrollHeight: number,
    +clientHeight: number,
    +maxScrollTop: number,
    +node: HTMLElement,
|};

const scrollPositionCacheList: Array<ScrollPositionType> = [];

function getScrollPosition(node: HTMLElement): ScrollPositionType {
    const cachedData = scrollPositionCacheList.find((cachedScrollPosition: ScrollPositionType): boolean => {
        return cachedScrollPosition.node === node;
    });

    if (cachedData) {
        return cachedData;
    }

    const {scrollHeight, clientHeight} = node;
    const maxScrollTop = scrollHeight - clientHeight;

    const scrollPosition: ScrollPositionType = {
        scrollHeight,
        clientHeight,
        maxScrollTop,
        node,
    };

    scrollPositionCacheList.push(scrollPosition);

    return scrollPosition;
}

export function updateScrollPositionCache(nodeList: Array<HTMLElement>) {
    // clear array
    scrollPositionCacheList.splice(0);
    // populate array
    nodeList.forEach(getScrollPosition);
}

export function syncScroll(fromNode: HTMLElement, toNode: HTMLElement) {
    const minScrollDeltaHeight = 1;
    const fromScroll = getScrollPosition(fromNode);
    const toScroll = getScrollPosition(toNode);

    const newTopPosition = fromScroll.node.scrollTop / fromScroll.maxScrollTop * toScroll.maxScrollTop;

    if (Math.abs(newTopPosition - toScroll.node.scrollTop) < minScrollDeltaHeight) {
        return;
    }

    toNode.scrollTo(0, newTopPosition);
}

// $FlowFixMe
export function debounce<FuncType>(wrappedFunction: FuncType, waitInMs: number, isImmediate?: boolean): FuncType {
    let timeout: TimeoutID | null = null;

    // $FlowFixMe
    return function debouncedFunction() {
        // eslint-disable-next-line consistent-this, babel/no-invalid-this
        const context = this;
        const argumentList = [...arguments];

        // eslint-disable-next-line unicorn/consistent-function-scoping
        function callLater() {
            timeout = null;

            if (!isImmediate) {
                // $FlowFixMe
                Reflect.apply(wrappedFunction, context, argumentList);
            }
        }

        const isCallNow = isImmediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(callLater, waitInMs);

        if (!isCallNow) {
            return;
        }

        // $FlowFixMe
        Reflect.apply(wrappedFunction, context, argumentList);
    };
}
