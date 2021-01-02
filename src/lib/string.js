// @flow

const openTagRegExp = /<\w[\S\s]*?>/g;
const closeTagRegExp = /<\/\w*?>/g;
const selfCloseTagRegExp = /<\w[\S\s]*?\/>/g;

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
