// @flow

import type {DragListItemType} from './drag-list-type';

export function getDragItemIdList(dragItemList: Array<DragListItemType>): Array<string> {
    return dragItemList.map<string>((dragItem: DragListItemType): string => dragItem.id);
}

export function getDragItemById(dragItemList: Array<DragListItemType>, dragItemId: string): DragListItemType | null {
    return dragItemList.find((dragItem: DragListItemType): boolean => dragItem.id === dragItemId) || null;
}

export const activeDragInfo = {
    itemId: '',
};
