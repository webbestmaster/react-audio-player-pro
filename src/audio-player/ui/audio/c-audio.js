// @flow

/* global HTMLElement */

import React, {type Node} from 'react';

import type {AudioPlayerContextType, AudioPlayerListItemType} from '../../audio-player-type';
import {AudioPlayerContextConsumer} from '../../c-audio-player-context';

import {AudioProvided} from './c-audio-provided';

type PropsType = {|
    +data: AudioPlayerListItemType,
    +onDidMount?: (audioNode: ?HTMLAudioElement) => mixed,
    +downloadFileName?: string,
    +className?: string,
|};

export function Audio(props: PropsType): Node {
    const {data, onDidMount, downloadFileName, className} = props;

    return (
        <AudioPlayerContextConsumer>
            {(audioPlayerContext: AudioPlayerContextType): Node => {
                return (
                    <AudioProvided
                        audioPlayerContext={audioPlayerContext}
                        className={className}
                        data={data}
                        downloadFileName={downloadFileName}
                        onDidMount={onDidMount}
                    />
                );
            }}
        </AudioPlayerContextConsumer>
    );
}
