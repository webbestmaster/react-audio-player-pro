// @flow

import React, {useState, useEffect} from 'react';

import {getRandomString} from '../../lib/string';

import dragListStyle from './drag-list.scss';

import type {DragListItemType} from './drag-list-type';
import {DragListItem} from './drag-list-item/c-drag-list-item';
import {getDragItemIdList, getDragItemById, activeDragInfo} from './drag-list-helper';

type PropsType = {|
    +list: Array<DragListItemType>,
    +onChange: (dragItemIdList: Array<string>) => void,
|};

export function DragList(props: PropsType): React$Node {
    const {list, onChange} = props;
    const [isDragOver, setIsDragOver] = useState<boolean>(false);
    const defaultIdList = getDragItemIdList(list);
    const [dragItemIdList, setDragItemIdList] = useState<Array<string>>(defaultIdList);
    const [isHiddenId, setIsHiddenId] = useState<string>('');

    /*
    function handleOnDragOver(evt: SyntheticEvent<DragEvent>) {
        const newDragList = [...dragItemIdList];

        // setIsHiddenId('');

        if (!newDragList.includes(activeDragInfo.itemId)) {
            // setDragItemIdList([activeDragInfo.itemId, ...newDragList]);
            // return;
        }

        // const itemId = evt.dataTransfer.getData('drag-item-id');

        console.log('list handleOnDragOver', dragItemIdList);

        // evt.preventDefault();
        // setIsDragOver(true);
    }

    function handleOnDragEnter(evt: SyntheticEvent<DragEvent>) {
        const newDragList = [...dragItemIdList];

        // setIsHiddenId('');

        if (!newDragList.includes(activeDragInfo.itemId)) {
            // setDragItemIdList([activeDragInfo.itemId, ...newDragList]);
            // return;
        }

        console.log('list handleOnDragEnter', dragItemIdList.join('') + '/' + activeDragInfo.itemId);

        evt.preventDefault();
        setIsDragOver(true);
    }

    function handleOnDragLeave(evt: SyntheticEvent<DragEvent>) {
        console.log('list handleOnDragLeave', dragItemIdList);

        const idList = getDragItemIdList(list);

        const itemId = activeDragInfo.itemId;

        if (!idList.includes(itemId)) {
            setDragItemIdList(idList);
        }

        setIsHiddenId(itemId);

        setIsDragOver(false);
    }

    function handleOnDragEnd() {
        console.log('list handleOnDragEnd', dragItemIdList);

        onChange(dragItemIdList);
        console.log(dragItemIdList);
        console.log('LIST - handleOnDragEnd - END');
    }

    function handleOnDrop(evt: SyntheticEvent<DragEvent>) {
        const itemId = activeDragInfo.itemId;

        evt.preventDefault();

        console.log('list handleOnDrop', dragItemIdList, itemId);

        // setIsDragged(false);
    }
*/

    /*
        if (dragItemIdList.length === 0) {
            const randomString = getRandomString();

            return (
                <ul
                    data-is={isDragOver}
                    key="empty"
                    onDragEnd={handleOnDragEnd}
                    onDragLeave={handleOnDragLeave}
                    onDragOver={handleOnDragOver}
                >
                    <DragListItem
                        dragList={dragItemIdList}
                        isDragActive={isDragOver}
                        item={{
                            id: randomString + 1,
                            node: 'no',
                        }}
                        key={randomString + 1}
                        setDragList={setDragItemIdList}
                    />
                </ul>
            );
        }
    */

    return (
        <div
            className={dragListStyle.drag_list}
            data-is={isDragOver}
            // onDragEnd={handleOnDragEnd}
            // onDragLeave={handleOnDragLeave}
            // onDragEnter={handleOnDragEnter}
            // onDragOver={handleOnDragOver}
            // onDrop={handleOnDrop}
        >
            {dragItemIdList.map((dragItemId: string): React$Node => {
                const dragListItem = getDragItemById(list, dragItemId);

                const foreignItem: DragListItemType = {
                    id: dragItemId,
                    node: 'no - node',
                };

                return (
                    <DragListItem
                        defaultIdList={defaultIdList}
                        dragList={dragItemIdList}
                        isDragActive={isDragOver}
                        item={dragListItem || foreignItem}
                        key={dragItemId}
                        setDragList={setDragItemIdList}
                    />
                );
            })}
        </div>
    );
}
