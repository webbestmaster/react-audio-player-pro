// @flow

import React from 'react';

import {classNames} from '../../../../../lib/css';

import trackDropZoneStyle from './track-drop-zone.scss';

type PropsType = {|
    +className?: string,
|};

export function TrackDropZone(props: PropsType): React$Node {
    const {className} = props;

    const fullClassName = classNames(trackDropZoneStyle.track_drop_zone, className);

    return (
        <div className={fullClassName}>
            <br/>

            <br/>

            <br/>

            <br/>
        </div>
    );
}
