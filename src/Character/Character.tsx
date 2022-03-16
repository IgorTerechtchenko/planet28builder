import React, { useState, useEffect } from 'react';
import { StatInput } from './StatInput/StatInput';

import {
    STARTING_SKILL,
    STARTING_SPEED,
    STARTING_HEALTH,
    CHARACTER_STARTING_COST,
    statsWithStartingValue,
    Stats,
} from './index';
import { Weapon } from '../Common/Weapon';
import { Trait } from '../Common/Trait';
import { Item } from '../Common/Item';
import { Items } from './Items/Items';
import { WeaponItem } from './Items/WeaponItem/WeaponItem';
import { TraitItem } from './Items/TraitItem/TraitItem';

interface Props {
    availableWeapons: Weapon[];
    availableTraits: Trait[];
}

export function Character({
    availableWeapons,
    availableTraits,
}: Props) {
    const [name, setName] = useState('');
    const [cost, setCost] = useState(CHARACTER_STARTING_COST);
    const [stats, setStats] = useState<Stats>({
        shooting: STARTING_SKILL,
        fighting: STARTING_SKILL,
        agility: STARTING_SKILL,
        health: STARTING_HEALTH,
        speed: STARTING_SPEED,
    });

    const [weapons, setWeapons] = useState<Weapon[]>([]);
    const [traits, setTraits] = useState<Trait[]>([]);

    function addItem<ItemType extends Item>(
        item: ItemType,
        itemList: ItemType[],
        setItemList: (value: ItemType[]) => void
    ) {
        setItemList([...itemList, item]);
    }

    useEffect(() => {
        const statNames = Object.keys(stats);
        const statValues = Object.values(stats);
        setCost(statValues.reduce((previousCost, _, index) => {
            const statName = statNames[index];
            const currentStatValue = statValues[index];
            const currentStatStartingValue = statsWithStartingValue[statName as keyof Stats];
            let statCost = 0;
            if (currentStatValue > currentStatStartingValue) {
                statCost += (currentStatValue - currentStatStartingValue) * 10;
            }
            return previousCost + statCost;
        }, 0));
    }, [stats]);

    console.log(weapons);
    return (
        <div className='character'>
            <div className='character_header'>
                <span> Name: </span>
                <input
                    onChange={(event) => setName(event.target.value)}
                    className='character_name'
                    value={name}
                />
                <span className='character_cost'> cost: {cost} </span>
            </div>
            <div className='character_stats'>
                {Object.keys(stats).map((statName) => {
                    return <StatInput
                        key={statName}
                        statTitle={statName as keyof Stats}
                        statValue={stats[statName as keyof Stats]}
                        stats={stats}
                        setStats={setStats}
                    />;
                })}
            </div>
            <Items
                itemTypeTitle={'Weapons'}
                availableItems={availableWeapons}
                addItem={
                    (item: Weapon) => {
                        addItem<Weapon>(item, weapons, setWeapons);
                    }
                }
            >
                {weapons.map((weapon, index) => {
                    return <WeaponItem weapon={weapon} deleteItem={() => {}} key={weapon.title + index}/>;
                })}
            </Items>
            <Items
                itemTypeTitle={'Traits'}
                availableItems={availableTraits}
                addItem={
                    (item: Trait) => {
                        addItem<Trait>(item, traits, setTraits);
                    }
                }
            >
                {traits.map((trait, index) => {
                    return <TraitItem trait={trait} deleteItem={() => {}} key={trait.title + index}/>;
                })}
            </Items>
        </div>
    )
}
