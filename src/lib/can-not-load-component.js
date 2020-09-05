// @flow

import React, {type Node} from 'react';

export function canNotLoadComponent(error: Error): Node {
    return (
        <div>
            <h1>Can not load component.</h1>
            <p>{JSON.stringify(error)}</p>
        </div>
    );
}
