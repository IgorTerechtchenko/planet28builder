import React, { useState, useEffect } from "react";
import { StatInput } from "./StatInput/StatInput";

export const STARTING_SKILL = 2;
export const STARTING_SPEED = 10;
export const STARTING_HEALTH = 20;
export const CHARACTER_STARTING_COST = 10;

export interface Stats {
    speed: number;
    health: number;
    shooting: number;
    fighting: number;
    agility: number;
}

export enum statsWithStartingValue {
    shooting = STARTING_SKILL,
    fighting = STARTING_SKILL,
    agility = STARTING_SKILL,
    speed = STARTING_SPEED,
    health = STARTING_HEALTH,
}

export function Character() {
    const [name, setName] = useState('');
    const [cost, setCost] = useState(CHARACTER_STARTING_COST);
    const [stats, setStats] = useState<Stats>({
        shooting: STARTING_SKILL,
        fighting: STARTING_SKILL,
        agility: STARTING_SKILL,
        health: STARTING_HEALTH,
        speed: STARTING_SPEED,
    });

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

    return (
        <div className="character">
            <div className="character_header">
                <span> Name: </span>
                <input
                    onChange={(event) => setName(event.target.value)}
                    className="character_name"
                    value={name}
                />
                <span className="character_cost"> cost: {cost} </span>
            </div>
            <div className="character_stats">
                {Object.keys(stats).map((statName) => {
                    return <StatInput
                        key={statName}
                        statName={statName as keyof Stats}
                        statValue={stats[statName as keyof Stats]}
                        stats={stats}
                        setStats={setStats}
                    />;
                })}
            </div>
            <div className="traits"></div>
            <div className="equipment"></div>
        </div>
    )
}
