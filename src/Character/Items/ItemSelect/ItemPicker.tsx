import React from 'react';
import { Item } from '../../../Common/Item';

interface Props<ItemType extends Item> {
    availableItems: ItemType[];
}

export function ItemSelect<ItemType extends Item>({
    availableItems
}: Props<ItemType>) {
    const ROOT_CLASS = 'item-picker';

    <div className={ROOT_CLASS}>
        <select className={`${ROOT_CLASS}_input`}>
            {
                availableItems.map((item) => {
                    return (
                        <option>
                            {`${item.title} - ${item.cost}`}
                        </option>
                    )
                })
            }
        </select>
    </div>
}