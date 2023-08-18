/* eslint-disable multiline-comment-style, capitalized-comments, line-comment-position, multiline-comment-style */

// const openTagRegExp = /<\w[\S\s]*?>/g;
// const closeTagRegExp = /<\/\w*?>/g;
// const selfCloseTagRegExp = /<\w[\S\s]*?\/>/g;

/*
export function extractText(html: string): string {
    return (
        html
            // remove open tags
            .replace(openTagRegExp, '')
            // remove close tags
            .replace(closeTagRegExp, '')
            // remove self close tags
            .replace(selfCloseTagRegExp, '')
            .trim()
    );
}
*/

// for 1e6 return string witch length 5 symbols, min - '0',  max - 'f4240'
export function getRandomString(): string {
    return Math.round(1e6 * Math.random()).toString(16);
}

function getRandomOne(): -1 | 1 {
    return Math.random() > 0.5 ? 1 : -1;
}

export function getRandomStringBySize(size: number): string {
    // eslint-disable-next-line newline-per-chained-call
    return Array.from({length: size}).map(getRandomString).sort(getRandomOne).join("").slice(0, size);
}
