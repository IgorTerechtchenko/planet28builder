import React from 'react';
import { Item } from '../../../Common/Item';

interface Props<ItemType extends Item> {
    availableItems: ItemType[];
    addItem: (item: ItemType) => void;
}

export function ItemSelect<ItemType extends Item>({
    availableItems,
    addItem,
}: Props<ItemType>) {
    const ROOT_CLASS = 'item-picker';

    return (
        <div className={ROOT_CLASS}>
            <select
                className={`${ROOT_CLASS}_input`}
                onChange={(event) => {
                    console.log(event.target.value);
                    const item = availableItems.find(
                        (item) => {
                            return item.title === event.target.value;
                        }
                    );
                    item && addItem(item);
                }
            }>
                {
                    availableItems?.map((item) => {
                        return item
                            ? (
                                <option key={item.title} value={item.title}>
                                    {`${item.title} - ${item.cost}`}
                                </option>
                            )
                            : null;
                    })
                }
            </select>
        </div>
    );
}