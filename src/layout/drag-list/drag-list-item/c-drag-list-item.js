// @flow

import React, {useState} from 'react';

import type {DragListItemType} from '../drag-list-type';
import {IsRender} from '../../is-render/c-is-render';
import {
    activeDragInfo,
    getIsNotSpecialItemListById,
    getIsSpecialItemListById,
    handlePreventDefault,
} from '../drag-list-helper';

import dragListItemStyle from './drag-list-item.scss';

type PropsType = {|
    +onDragStart: () => void,
    +onDragEnd: () => void,
    +defaultIdList: Array<string>,
    +itemIdList: Array<string>,
    +item: DragListItemType,
    +setItemIdList: (dragItemIdList: Array<string>) => void,
|};

export function DragListItem(props: PropsType): React$Node {
    const {item, setItemIdList, itemIdList, defaultIdList, onDragEnd, onDragStart} = props;
    const {id, node} = item;
    const [isDragged, setIsDragged] = useState<boolean>(false);

    function handleOnDragStart() {
        activeDragInfo.itemId = id;
        onDragStart();
        setIsDragged(true);
    }

    function handleOnDragEnd() {
        console.log('---- item handleOnDragEnd', id);

        onDragEnd();

        setIsDragged(false);
    }

    function handleOnDragOverOverflow(shift: 1 | -1) {
        if (id === activeDragInfo.itemId) {
            return;
        }

        const newDragList = [...itemIdList];

        if (!newDragList.includes(activeDragInfo.itemId)) {
            const index = newDragList.indexOf(id);

            newDragList.splice(index, 0, activeDragInfo.itemId);

            setItemIdList(newDragList);
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

        setItemIdList(newDragList);
    }

    function handleOnDragOverTop() {
        handleOnDragOverOverflow(-1);
    }

    function handleOnDragOverBottom() {
        handleOnDragOverOverflow(1);
    }

    function handleOnDragLeave() {
        if (getIsSpecialItemListById(id)) {
            setItemIdList([...defaultIdList]);
        }
    }

    /*
    function handleOnDrop() {
        console.log('---- item handleOnDrop', id, activeDragInfo.itemId);
    }
*/

    return (
        <div
            className={dragListItemStyle.drag_list_item}
            draggable={getIsNotSpecialItemListById(id)}
            onDragEnd={handleOnDragEnd}
            // onDragOver={handlePreventDefault}
            onDragStart={handleOnDragStart}
            // onDrop={handleOnDrop}
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
