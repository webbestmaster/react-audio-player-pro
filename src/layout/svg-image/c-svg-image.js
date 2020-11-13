// @flow

import React from 'react';

type PropsType = {|
    +className: string,
    +imageId: string,
|};

export function SvgImage(props: PropsType): React$Node {
    const {className, imageId} = props;

    return (
        <svg className={className}>
            <use xlinkHref={imageId}/>
        </svg>
    );
}
