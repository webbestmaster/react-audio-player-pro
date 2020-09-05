// @flow

import React, {type Node} from 'react';

type PropsType = {|
    +className: string,
    +imageId: string,
|};

export function SvgImage(props: PropsType): Node {
    const {className, imageId} = props;

    return (
        <svg className={className}>
            <use xlinkHref={imageId}/>
        </svg>
    );
}
