// @flow

import React, {type Node} from 'react';

type PropsType = {|
    +isRender: boolean,
    +children: Node,
|};

export function IsRender(props: PropsType): Node {
    const {isRender, children} = props;

    return isRender ? children : null;
}
