// @flow

import React, {useState} from 'react';

import type {DragListItemType} from '../drag-list-type';
import {IsRender} from '../../is-render/c-is-render';

import dragListItemStyle from './drag-list-item.scss';

type PropsType = {|
    +item: DragListItemType,
    +isDragActive: boolean,
    +setDragList: (dragItemIdList: Array<string>) => void,
    +dragList: Array<string>,
|};

export function DragListItem(props: PropsType): React$Node {
    const {item, setDragList, dragList} = props;
    const {id, node} = item;

    const [isDragged, setIsDragged] = useState<boolean>(false);

    function handleOnDragStart() {
        setIsDragged(true);
    }

    function handleOnDragEnd() {
        setIsDragged(false);
    }

    function handleOnDragOverTop() {
        console.log(id);
        const newDragList = [...dragList];

        const currentIndex = newDragList.indexOf(id);
        const prevElement = newDragList[currentIndex - 1];

        if (!prevElement) {
            console.log('nononon');
            return;
        }

        newDragList[currentIndex - 1] = id;
        newDragList[currentIndex] = prevElement;

        setDragList(newDragList);
    }

    function handleOnDragOverBottom() {
        console.log(id);
        const newDragList = [...dragList];

        const currentIndex = newDragList.indexOf(id);
        const prevElement = newDragList[currentIndex + 1];

        if (!prevElement) {
            console.log('nononon');
            return;
        }

        newDragList[currentIndex + 1] = id;
        newDragList[currentIndex] = prevElement;

        setDragList(newDragList);
    }

    // function handleOnDragLeaveTop(evt) {}

    // function handleOnDragLeaveBottom(evt) {}

    return (
        <li
            className={dragListItemStyle.drag_list_item}
            // onDragOver={handleOnDragOver}
            // onDragLeave={handleOnDragLeave}
            data-id={id}
            draggable
            onDragEnd={handleOnDragEnd}
            onDragStart={handleOnDragStart}
        >
            <IsRender isRender={isDragged === false}>
                <div
                    // style={{pointerEvents: isDragActive ? 'initial' : 'none'}}
                    className={dragListItemStyle.drag_hunter_top}
                    // onDragLeave={handleOnDragLeaveTop}
                    onDragOver={handleOnDragOverTop}
                />

                <div
                    // style={{pointerEvents: isDragActive ? 'initial' : 'none'}}
                    className={dragListItemStyle.drag_hunter_bottom}
                    // onDragLeave={handleOnDragLeaveBottom}
                    onDragOver={handleOnDragOverBottom}
                />
            </IsRender>

            <div className={dragListItemStyle.content}>{node}</div>
        </li>
    );
}
