// @flow

import React from 'react';

type PropsType = {|
    +isRender: boolean,
    +children: React$Node,
|};

export function IsRender(props: PropsType): React$Node {
    const {isRender, children} = props;

    return isRender ? children : null;
}
