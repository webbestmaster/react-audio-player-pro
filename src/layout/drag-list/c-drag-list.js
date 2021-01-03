// @flow

import React, {useState} from 'react';

import type {DragListItemType} from './drag-list-type';
import {DragListItem} from './drag-list-item/c-drag-list-item';
import {
    activeDragInfo,
    getDragItemById,
    getDragItemIdList,
    getFullItemIdList,
    getIsNotSpecialItemListById,
    handlePreventDefault,
    resetActiveDragInfo,
} from './drag-list-helper';
import dragListStyle from './drag-list.scss';

type PropsType = {|
    +list: Array<DragListItemType>,
    +onChange: (dragItemIdList: Array<string>) => void,
|};

export function DragList(props: PropsType): React$Node {
    const {list, onChange} = props;
    const defaultItemIdShortList = getDragItemIdList(list);
    const defaultItemIdList = getFullItemIdList(defaultItemIdShortList);
    const [itemIdList, setItemIdList] = useState<Array<string>>(defaultItemIdList);
    const listId = defaultItemIdShortList.join('-');

    // order - 1
    function handleOnDrop() {
        if (activeDragInfo.listFrom === activeDragInfo.listTo) {
            resetActiveDragInfo();
            onChange(itemIdList.filter(getIsNotSpecialItemListById));
            return;
        }

        onChange(itemIdList.filter(getIsNotSpecialItemListById));

        console.log('---- list handleOnDrop', itemIdList, activeDragInfo.itemId);
    }

    // order - 2
    function onDragEnd() {
        if (activeDragInfo.listFrom === activeDragInfo.listTo) {
            return;
        }

        const activeItemId = activeDragInfo.itemId;

        resetActiveDragInfo();

        const resultList = itemIdList.filter((itemId: string): boolean => {
            return getIsNotSpecialItemListById(itemId) && activeItemId !== itemId;
        });

        onChange(resultList);

        console.log('list onDragEnd', itemIdList);
    }

    // pass me to drag item
    function onDragStart() {
        activeDragInfo.listFrom = listId;
        console.log('list onDragStart', itemIdList);
    }

    // pass me to drag item
    function onDragOver(evt: SyntheticEvent<EventTarget>) {
        handlePreventDefault(evt);
        activeDragInfo.listTo = listId;
        console.log('list onDragOver', itemIdList);
    }

    return (
        <div className={dragListStyle.drag_list} data-id={listId} onDragOver={onDragOver} onDrop={handleOnDrop}>
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
                        onDragEnd={onDragEnd}
                        onDragStart={onDragStart}
                        setItemIdList={setItemIdList}
                    />
                );
            })}
        </div>
    );
}
