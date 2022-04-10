import React from 'react';
import styled from 'styled-components';
import { Item } from '../../Common/Item';
import { ItemSelect } from './ItemSelect/ItemSelect';

interface Props<ItemType extends Item> {
    itemTypeTitle: string;
    availableItems: ItemType[];
    addItem: (item: ItemType) => void;
    children: React.ReactNode[];
}

const ItemsBlock = styled.div`
    text-align: left;
    margin-top: 20px;
`;

const ItemsList = styled.ul`
    padding: 0 10px;
`;

const ItemTypeTitle = styled.h3`
    margin-bottom: 10px;
`;

export function Items<ItemType extends Item>({
    availableItems,
    itemTypeTitle,
    addItem,
    children,
}: Props<ItemType>) {
    const ROOT_CLASS = 'items';
    return (
        <ItemsBlock>
            <ItemTypeTitle> {itemTypeTitle} </ItemTypeTitle>
            {
                !!children.length &&
                    <ItemsList className={`${ROOT_CLASS}__current-list`}>
                        {children}
                    </ItemsList>
            }
            <ItemSelect addItem={addItem} availableItems={availableItems} />
        </ItemsBlock>
    );
}
