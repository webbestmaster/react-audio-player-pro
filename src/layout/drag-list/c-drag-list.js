// @flow

import React, {useState} from 'react';

import type {DragListItemType} from './drag-list-type';
import {DragListItem} from './drag-list-item/c-drag-list-item';
import {getDragItemById, getDragItemIdList} from './drag-list-helper';

import dragListStyle from './drag-list.scss';
import {afterListItemId, beforeListItemId} from './drag-list-const';

type PropsType = {|
    +list: Array<DragListItemType>,
    +onChange: (dragItemIdList: Array<string>) => void,
|};

export function DragList(props: PropsType): React$Node {
    const {list, onChange} = props;
    const defaultIdList = [beforeListItemId, ...getDragItemIdList(list), afterListItemId];
    const [dragItemIdList, setDragItemIdList] = useState<Array<string>>(defaultIdList);

    const fullDragItemIdList = [...dragItemIdList].filter((id: string): boolean => {
        return id !== beforeListItemId && id !== afterListItemId;
    });

    fullDragItemIdList.unshift(beforeListItemId);
    fullDragItemIdList.push(afterListItemId);

    return (
        <div className={dragListStyle.drag_list}>
            {fullDragItemIdList.map((dragItemId: string): React$Node => {
                const dragListItem = getDragItemById(list, dragItemId);

                const foreignItem: DragListItemType = {
                    id: dragItemId,
                    node: dragItemId,
                };

                return (
                    <DragListItem
                        defaultIdList={defaultIdList}
                        dragList={dragItemIdList}
                        item={dragListItem || foreignItem}
                        key={dragItemId}
                        setDragList={setDragItemIdList}
                    />
                );
            })}
        </div>
    );
}
