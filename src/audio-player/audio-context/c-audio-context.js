// @flow

import React, {Component, type Node} from 'react';
import classNames from 'classnames';

import type {AudioContextType} from './audio-context-type';
import {defaultAudioContextData} from './audio-context-const';

const audioContext = React.createContext<AudioContextType>(defaultAudioContextData);

export const AudioContextConsumer = audioContext.Consumer;
export const AudioContextProviderClean = audioContext.Provider;

type PropsType = {|
    +children: Node,
|};

type StateType = {};

export class AudioContextProvider extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    render(): Node {
        const {props} = this;
        const {children} = props;

        // const providedData = this.getProviderValue();
        const providedData: AudioContextType = {};

        return [
            <AudioContextProviderClean key="audio-context-provider" value={providedData}>
                {children}
            </AudioContextProviderClean>,
        ];
    }
}
