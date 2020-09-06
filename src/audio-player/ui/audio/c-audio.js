// @flow

/* global HTMLElement */

import React, {type Node} from 'react';
import classNames from 'classnames';

import type {AudioPlayerContextType} from '../../audio-player-type';
import type {SystemContextType} from '../../../system/system-context-type';
import {AudioPlayerContextConsumer} from '../../c-audio-player-context';
import {SystemContextConsumer} from '../../../system/c-system-context';

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
                    <SystemContextConsumer>
                        {(systemContext: SystemContextType): Node => {
                            return (
                                <AudioProvided
                                    audioPlayerContext={audioPlayerContext}
                                    className={className}
                                    downloadFileName={downloadFileName}
                                    onDidMount={onDidMount}
                                    src={src}
                                    systemContext={systemContext}
                                />
                            );
                        }}
                    </SystemContextConsumer>
                );
            }}
        </AudioPlayerContextConsumer>
    );
}
