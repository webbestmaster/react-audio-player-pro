// @flow

import React, {useState} from 'react';

import type {DragListItemType} from './drag-list-type';
import {DragListItem} from './drag-list-item/c-drag-list-item';
import {getDragItemIdList, getDragItemById} from './drag-list-helper';

import dragListStyle from './drag-list.scss';

type PropsType = {|
    +list: Array<DragListItemType>,
    +onChange: (dragItemIdList: Array<string>) => void,
|};

export function DragList(props: PropsType): React$Node {
    const {list, onChange} = props;
    const defaultIdList = ['before', ...getDragItemIdList(list), 'after'];
    const [dragItemIdList, setDragItemIdList] = useState<Array<string>>(defaultIdList);

    const fullDragItemIdList = [...dragItemIdList].filter((id: string): boolean => {
        return id !== 'before' && id !== 'after';
    });

    fullDragItemIdList.unshift('before');

    fullDragItemIdList.push('after');

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
