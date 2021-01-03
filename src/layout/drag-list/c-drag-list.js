// @flow

import React, {useState} from 'react';

import type {DragListItemType} from './drag-list-type';
import {DragListItem} from './drag-list-item/c-drag-list-item';
import {activeDragInfo, getDragItemById, getDragItemIdList, getFullItemIdList} from './drag-list-helper';
import dragListStyle from './drag-list.scss';

type PropsType = {|
    +list: Array<DragListItemType>,
    +onChange: (dragItemIdList: Array<string>) => void,
|};

export function DragList(props: PropsType): React$Node {
    const {list, onChange} = props;
    const defaultItemIdList = getFullItemIdList(getDragItemIdList(list));
    const [itemIdList, setItemIdList] = useState<Array<string>>(defaultItemIdList);

    function handleOnDrop() {
        console.log('---- list handleOnDrop', itemIdList, activeDragInfo.itemId);
    }

    return (
        <div className={dragListStyle.drag_list} onDrop={handleOnDrop}>
            {getFullItemIdList(itemIdList).map((dragItemId: string): React$Node => {
                const dragListItem = getDragItemById(list, dragItemId);

                const foreignItem: DragListItemType = {
                    id: dragItemId,
                    node: dragItemId,
                };

                return (
                    <DragListItem
                        defaultIdList={defaultItemIdList}
                        item={dragListItem || foreignItem}
                        itemIdList={itemIdList}
                        key={dragItemId}
                        setItemIdList={setItemIdList}
                    />
                );
            })}
        </div>
    );
}
