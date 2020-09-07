// @flow

/* global HTMLElement */

import React, {type Node} from 'react';

import type {AudioPlayerContextType} from '../../audio-player-type';
import {AudioPlayerContextConsumer} from '../../c-audio-player-context';

import {AudioProvided} from './c-audio-provided';

type PropsType = {|
    +src: string,
    +onDidMount?: (audioNode: ?HTMLAudioElement) => mixed,
    +downloadFileName?: string,
    +className?: string,
|};

export function Audio(props: PropsType): Node {
    const {src, onDidMount, downloadFileName, className} = props;

    return (
        <AudioPlayerContextConsumer>
            {(audioPlayerContext: AudioPlayerContextType): Node => {
                return (
                    <AudioProvided
                        audioPlayerContext={audioPlayerContext}
                        className={className}
                        downloadFileName={downloadFileName}
                        onDidMount={onDidMount}
                        src={src}
                    />
                );
            }}
        </AudioPlayerContextConsumer>
    );
}
