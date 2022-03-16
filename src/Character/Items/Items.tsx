import React from 'react';
import { Item } from '../../Common/Item';
import { ItemSelect } from './ItemSelect/ItemSelect';

interface Props<ItemType extends Item> {
    itemTypeTitle: string;
    availableItems: ItemType[];
    addItem: (item: ItemType) => void;
    children: React.ReactNode;
}

export function Items<ItemType extends Item>({
    availableItems,
    itemTypeTitle,
    addItem,
    children,
}: Props<ItemType>) {
    const ROOT_CLASS = 'items';

    return (
        <div className={ROOT_CLASS}>
            <span className={`${ROOT_CLASS}_item-type-title`}> {itemTypeTitle} </span>
            <ul className={`${ROOT_CLASS}__current-list`}>
                {children}
            </ul>
            <ItemSelect addItem={addItem} availableItems={availableItems} />
        </div>
    );
}
