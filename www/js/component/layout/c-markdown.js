// @flow

import React, {type Node} from 'react';

import {markdown, type MarkdownConfigType} from 'markdown-pro';

type PropsType = {|
    +mdInput: string,
    +config?: MarkdownConfigType,
|};

export function Markdown(props: PropsType): Node {
    const {mdInput, config} = props;

    // eslint-disable-next-line react/no-danger, id-match
    return <div className="md-pro" dangerouslySetInnerHTML={{__html: markdown(mdInput, config)}}/>;
}
