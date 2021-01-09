// @flow

import React from 'react';

import type {PlayListType} from '../../provider/play-list/play-list-context-type';

import {PlayListContainer} from './list-of-play-list/play-list-container/c-play-list-container';

export function renderPlayListContainer(playList: PlayListType, index: number): React$Node {
    return <PlayListContainer key={String(index)} playList={playList}/>;
}
