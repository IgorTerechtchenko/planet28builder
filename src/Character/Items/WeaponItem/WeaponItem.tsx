import React from 'react';
import { Weapon } from '../../../Common/Weapon';
import styled from 'styled-components';

interface Props {
    deleteItem: (id: number) => void;
    weapon: Weapon;
}

const WeaponStats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const WeaponRuleText = styled.span`
    font-family: Roboto;
`;

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
    const ROOT_CLASS = 'weapon';
    console.log(specialRules);

    return (
        <div className={ROOT_CLASS}>
            <div>
                <span> {title} </span>
                <WeaponStats>
                    <span>
                        Cost: {cost}
                    </span>
                    <span>
                        Type: {type}
                    </span>
                    <span>
                        Size: {size}
                    </span>
                    {
                        range &&
                        <span>
                            Range: {range}
                        </span>
                    }
                    <span>
                        Damage: {damage}
                    </span>
                </WeaponStats>
                <ul>
                    {specialRules.map((rule) => {
                        return (
                            <li>
                                <span> {rule.title} </span>
                                <WeaponRuleText> {rule.text} </WeaponRuleText>
                            </li>
                        )}
                    )}
                </ul>
            </div>
        </div>
    );
}
