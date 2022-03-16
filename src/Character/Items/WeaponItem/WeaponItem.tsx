import React from 'react';
import { Weapon } from '../../../Common/Weapon';

interface Props {
    deleteItem: (id: number) => void;
    weapon: Weapon;
}

export function WeaponItem({
    deleteItem,
    weapon: {
        title,
        type,
        range,
        damage,
        size,
        specialRules,
        cost,
    },
}: Props) {
    const ROOT_CLASS = 'trait';

    return (
        <div className={ROOT_CLASS}>
            <span>
                {`
                    ${title} | ${cost}
                    ${type} ${size} ${range} ${damage}
                    ${specialRules}
                `}
            </span>
        </div>
    );
}
