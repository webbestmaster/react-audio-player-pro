// @flow

import React, {useState, useRef} from 'react';

import type {DragListItemType} from '../drag-list-type';
import {IsRender} from '../../is-render/c-is-render';

import {activeDragInfo} from '../drag-list-helper';

import dragListItemStyle from './drag-list-item.scss';

type PropsType = {|
    +defaultIdList: Array<string>,
    +dragList: Array<string>,
    +isDragActive: boolean,
    +item: DragListItemType,
    +setDragList: (dragItemIdList: Array<string>) => void,
|};

export function DragListItem(props: PropsType): React$Node {
    const {item, setDragList, dragList, isDragActive} = props;
    const {id, node} = item;

    const [isDragged, setIsDragged] = useState<boolean>(false);
    const [isDragOverTop, setIsDragOverTop] = useState<boolean>(false);
    const [isDragOverBottom, setIsDragOverBottom] = useState<boolean>(false);

    function handleOnDragStart() {
        // console.log('item handleOnDragStart', id);

        activeDragInfo.itemId = id;

        // evt.dataTransfer.setData('drag-item-id', id);

        setIsDragged(true);
    }

    function handleOnDragEnd(evt) {
        /*
                if (id === activeDragInfo.itemId) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    setIsDragged(true);
                    return;
                }
        */
        console.log('item handleOnDragEnd', id);
        setIsDragged(false);
    }

    function handleOnDragOverTop(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        if (id === activeDragInfo.itemId) {
            return;
        }

        const newDragList = [...dragList];

        if (!newDragList.includes(activeDragInfo.itemId)) {
            const index = newDragList.indexOf(id);

            newDragList.splice(index, 0, activeDragInfo.itemId);
            console.log('top');

            setDragList(newDragList);
            return;
        }

        const currentIndex = newDragList.indexOf(id);
        const prevElement = newDragList[currentIndex - 1];

        if (!prevElement) {
            // setIsDragOverTop(true);
            console.log('nononon');
            return;
        }

        newDragList[currentIndex - 1] = id;
        newDragList[currentIndex] = prevElement;

        setDragList(newDragList);
    }

    function handleOnDragLeaveTop(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        if (id === activeDragInfo.itemId) {
            if (props.defaultIdList.includes(activeDragInfo.itemId)) {
                return;
            }
            setDragList([...props.defaultIdList]);
        }

        // setIsDragOverTop(false);
    }

    function handleOnDragOverBottom(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        if (id === activeDragInfo.itemId) {
            return;
        }

        console.log(id);
        const newDragList = [...dragList];

        const currentIndex = newDragList.indexOf(id);
        const prevElement = newDragList[currentIndex + 1];

        if (!newDragList.includes(activeDragInfo.itemId)) {
            const index = newDragList.indexOf(id);

            newDragList.splice(index, 0, activeDragInfo.itemId);

            setDragList(newDragList);

            return;
        }

        if (!prevElement) {
            // setIsDragOverBottom(true);
            console.log('nononon');
            return;
        }

        newDragList[currentIndex + 1] = id;
        newDragList[currentIndex] = prevElement;

        setDragList(newDragList);
    }

    function handleOnDragLeaveBottom(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        console.log('my index', dragList.indexOf(id));

        if (id === activeDragInfo.itemId) {
            console.log('!!!!!!!');
            if (props.defaultIdList.includes(activeDragInfo.itemId)) {
                return;
            }
            setDragList([...props.defaultIdList]);
        }

        // setIsDragOverBottom(false);
    }

    return (
        <div
            className={dragListItemStyle.drag_list_item}
            // style={{order: props.index}}
            // onDragOver={handleOnDragOver}
            // onDragLeave={handleOnDragLeave}
            data-id={id}
            draggable
            onDragEnd={handleOnDragEnd}
            onDragStart={handleOnDragStart}
        >
            {/*
            <IsRender isRender={isDragOverTop}>
                <div>
                    drag top
                </div>
            </IsRender>
*/}

            <IsRender isRender={isDragged === false}>
                <div
                    // style={{pointerEvents: isDragActive ? 'initial' : 'none'}}
                    className={dragListItemStyle.drag_hunter_top}
                    onDragLeave={handleOnDragLeaveTop}
                    onDragOver={handleOnDragOverTop}
                />

                <div
                    // style={{pointerEvents: isDragActive ? 'initial' : 'none'}}
                    className={dragListItemStyle.drag_hunter_bottom}
                    onDragLeave={handleOnDragLeaveBottom}
                    onDragOver={handleOnDragOverBottom}
                />
            </IsRender>

            <div className={dragListItemStyle.content}>{node}</div>

            {/*
            <IsRender isRender={isDragOverBottom}>
                <div>
                    drag bottom
                </div>
            </IsRender>
*/}
        </div>
    );
}
