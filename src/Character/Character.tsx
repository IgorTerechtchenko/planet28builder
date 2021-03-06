import React, { useState, useEffect } from 'react';

import {
    CharacterStats,
    CharacterCardWrapper,
    CharacterHeader,
    CharacterName,
    CharacterNameInput,
    CharacterNameHeader,
} from './CharacterStyles';
import { StatInput } from './StatInput/StatInput';

import {
    STARTING_SKILL,
    STARTING_SPEED,
    STARTING_HEALTH,
    CHARACTER_STARTING_COST,
    statsWithStartingValue,
    Stats,
    Character,
} from './index';
import { Weapon } from '../Common/Weapon';
import { Trait } from '../Common/Trait';
import { Items } from './Items/Items';
import { WeaponItem } from './Items/WeaponItem/WeaponItem';
import { TraitItem } from './Items/TraitItem/TraitItem';
import { Action } from '../Crew/Crew';

interface Props {
    availableWeapons: Weapon[];
    availableTraits: Trait[];
    character: Character;
    index: number;
    dispatch: React.Dispatch<Action>;
}

export function CharacterCard({
    availableWeapons,
    availableTraits,
    index,
    dispatch,
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

    useEffect(() => {
        const statNames = Object.keys(stats);
        const statValues = Object.values(stats);
        const statsCost = statValues.reduce((previousCost, _, index) => {
            const statName = statNames[index];
            const currentStatValue = statValues[index];
            const currentStatStartingValue = statsWithStartingValue[statName as keyof Stats];
            let statCost = 0;
            if (currentStatValue > currentStatStartingValue) {
                statCost += (currentStatValue - currentStatStartingValue) * 10;
            }
            return previousCost + statCost;
        }, 0);
        const items = [...weapons, ...traits];
        const itemsCost = items.reduce((previeousCost, _, index) => {
            return previeousCost + items[index].cost;
        }, 0);

        setCost(CHARACTER_STARTING_COST + statsCost + itemsCost);
    }, [stats, weapons, traits]);

    useEffect(() => {
        const character = {
            name,
            cost,
            stats,
            weapons,
            traits,
        };

        dispatch({
            type: 'update-crew',
            payload: {
                member: character,
                memberIndex: index,
            },
        });
    }, [name, cost, stats, weapons, traits, index, dispatch]);

    return (
        <CharacterCardWrapper>
            <CharacterHeader className='character_header'>
                <CharacterName>
                    <CharacterNameHeader> Name: </CharacterNameHeader>
                    <CharacterNameInput
                        onChange={(event) => setName(event.target.value)}
                        className='character_name'
                        value={name}
                    />
                </CharacterName>
                <span className='character_cost'> cost: {cost} </span>
            </CharacterHeader>
            <CharacterStats>
                {Object.keys(stats).map((statName) => {
                    return <StatInput
                        key={statName}
                        statTitle={statName as keyof Stats}
                        statValue={stats[statName as keyof Stats]}
                        stats={stats}
                        setStats={setStats}
                    />;
                })}
            </CharacterStats>
            <Items
                itemTypeTitle={'Weapons'}
                availableItems={availableWeapons}
                addItem={
                    (item: Weapon) => {
                        setWeapons([...weapons, item]);
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
                        setTraits([...traits, item]);
                    }
                }
            >
                {traits.map((trait, index) => {
                    return <TraitItem trait={trait} deleteItem={() => {}} key={trait.title + index}/>;
                })}
            </Items>
        </CharacterCardWrapper>
    )
}
