// @flow

import React, {Component, type Node} from 'react';

type PropsType = {|
    +load: () => Promise<Node | Array<Node>>,
|};

type StateType = {|
    +component: Node | Array<Node>,
|};

export class LoadComponent extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            component: null,
        };
    }

    async componentDidMount() {
        await this.load();
    }

    async load() {
        const {props} = this;

        const loadComponentResult = await props.load();

        if (loadComponentResult instanceof Error) {
            console.error('can not load component');
            this.setState({component: <span>Error to load component</span>});
            return;
        }

        this.setState({component: loadComponentResult});
    }

    render(): Node | Array<Node> {
        const {state} = this;

        return state.component;
    }
}
