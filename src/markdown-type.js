// @flow

export type MarkdownConfigShallowType = {|
    +useLineBreak?: boolean,
    +wrapperClassName?: string,
    +parseLink?: boolean,
    +codeHighlight?: (langName: string, code: string) => string,
    +useWrapper?: boolean,
|};

export type MarkdownConfigType = {|
    // make \n => <br/>
    +useLineBreak: boolean,
    // additional css class for wrapper
    +wrapperClassName: string,
    // https://exmaple.com -> <a href="https://exmaple.com">https://exmaple.com</a>
    +parseLink: boolean,
    // code highlight
    +codeHighlight: (langName: string, code: string) => string,
    // use wrapper <div class="md-pro">...</div>
    +useWrapper: boolean,
|};
