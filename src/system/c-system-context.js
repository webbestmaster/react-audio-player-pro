// @flow

/* global window */

import React, {Component, type Node} from 'react';

import {debounce} from '../lib/function';

import type {SystemContextType} from './system-context-type';
import {getSystemState} from './system-context-helper';

const defaultSystemContextData = getSystemState();

const systemContext = React.createContext<SystemContextType>(defaultSystemContextData);
const SystemContextProvider = systemContext.Provider;

export const SystemContextConsumer = systemContext.Consumer;

type PropsType = {|
    +children: Node,
|};

type StateType = {|
    +providedData: SystemContextType,
|};

export class SystemProvider extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            providedData: defaultSystemContextData,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', debounce<() => void>(this.handleResize, 150), {
            capture: false,
            passive: true,
        });
        window.addEventListener('load', this.handleWindowLoad, false);
    }

    handleResize = () => {
        const {state} = this;
        const {providedData} = state;
        const {isWindowLoaded} = providedData;
        const {width, height} = providedData.screen;
        const systemState = getSystemState();

        if (systemState.screen.width !== width || systemState.screen.height !== height) {
            this.setState({
                providedData: {...systemState, isWindowLoaded},
            });
        }
    };

    handleWindowLoad = () => {
        const systemState = getSystemState();

        this.setState({
            providedData: {...systemState, isWindowLoaded: true},
        });

        window.removeEventListener('load', this.handleWindowLoad, false);
    };

    getProviderValue(): SystemContextType {
        const {state} = this;

        return {
            ...state.providedData,
        };
    }

    render(): Node {
        const {props} = this;
        const {children} = props;

        return <SystemContextProvider value={this.getProviderValue()}>{children}</SystemContextProvider>;
    }
}
