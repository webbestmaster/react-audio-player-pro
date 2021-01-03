// @flow

import React, {useState} from 'react';

import type {DragListItemType} from '../drag-list-type';
import {IsRender} from '../../is-render/c-is-render';
import {activeDragInfo} from '../drag-list-helper';

import dragListItemStyle from './drag-list-item.scss';

type PropsType = {|
    +defaultIdList: Array<string>,
    +dragList: Array<string>,
    +item: DragListItemType,
    +setDragList: (dragItemIdList: Array<string>) => void,
|};

export function DragListItem(props: PropsType): React$Node {
    const {item, setDragList, dragList, defaultIdList} = props;
    const {id, node} = item;

    const [isDragged, setIsDragged] = useState<boolean>(false);

    function handleOnDragStart() {
        activeDragInfo.itemId = id;

        setIsDragged(true);
    }

    function handleOnDragEnd() {
        activeDragInfo.itemId = '';

        setIsDragged(false);
    }

    function handleOnDragOver(shift: 1 | -1) {
        if (id === activeDragInfo.itemId) {
            return;
        }

        const newDragList = [...dragList];

        if (!newDragList.includes(activeDragInfo.itemId)) {
            const index = newDragList.indexOf(id);

            newDragList.splice(index, 0, activeDragInfo.itemId);

            setDragList(newDragList);
            return;
        }

        const currentIndex = newDragList.indexOf(id);
        const siblingElement = newDragList[currentIndex + shift];

        if (!siblingElement) {
            console.log('no sibling element');
            return;
        }

        newDragList[currentIndex + shift] = id;
        newDragList[currentIndex] = siblingElement;

        setDragList(newDragList);
    }

    function handleOnDragOverTop() {
        handleOnDragOver(-1);
    }

    function handleOnDragOverBottom() {
        handleOnDragOver(1);
    }

    function handleOnDragLeave() {
        if (id !== activeDragInfo.itemId || defaultIdList.includes(activeDragInfo.itemId)) {
            return;
        }

        setDragList([...defaultIdList]);
    }

    return (
        <div
            className={dragListItemStyle.drag_list_item}
            data-id={id}
            draggable
            onDragEnd={handleOnDragEnd}
            onDragStart={handleOnDragStart}
        >
            <IsRender isRender={isDragged === false && id !== activeDragInfo.itemId}>
                <div
                    className={dragListItemStyle.drag_hunter_top}
                    onDragLeave={handleOnDragLeave}
                    onDragOver={handleOnDragOverTop}
                />

                <div
                    className={dragListItemStyle.drag_hunter_bottom}
                    onDragLeave={handleOnDragLeave}
                    onDragOver={handleOnDragOverBottom}
                />
            </IsRender>

            <div className={dragListItemStyle.content}>{node}</div>
        </div>
    );
}
