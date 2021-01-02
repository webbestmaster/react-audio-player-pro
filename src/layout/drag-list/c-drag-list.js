// @flow

import React, {useState, useEffect} from 'react';

import type {DragListItemType} from './drag-list-type';
import {DragListItem} from './drag-list-item/c-drag-list-item';
import {getDragItemIdList, getDragItemById} from './drag-list-helper';

type PropsType = {|
    +list: Array<DragListItemType>,
    +onChange: (dragItemIdList: Array<string>) => void,
|};

export function DragList(props: PropsType): React$Node {
    const {list, onChange} = props;
    const [isDragOver, setIsDragOver] = useState<boolean>(false);
    const [dragItemIdList, setDragItemIdList] = useState<Array<string>>(getDragItemIdList(list));

    function handleOnDragOver() {
        setIsDragOver(true);
    }

    function handleOnDragLeave() {
        setIsDragOver(false);
    }

    function handleOnDragEnd() {
        onChange(dragItemIdList);
        console.log('LIST - handleOnDragEnd - END');
    }

    return (
        <ul
            data-is={isDragOver}
            onDragEnd={handleOnDragEnd}
            onDragLeave={handleOnDragLeave}
            onDragOver={handleOnDragOver}
        >
            {dragItemIdList.map((dragItemId: string): React$Node => {
                const dragListItem = getDragItemById(list, dragItemId);

                if (!dragListItem) {
                    return null;
                }

                return (
                    <DragListItem
                        dragList={dragItemIdList}
                        isDragActive={isDragOver}
                        item={dragListItem}
                        key={dragItemId}
                        setDragList={setDragItemIdList}
                    />
                );
            })}
        </ul>
    );
}
