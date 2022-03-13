import React, { useState, useEffect } from "react";
import { StatInput } from "./StatInput/StatInput";

export const STARTING_SKILL = 2;
export const STARTING_SPEED = 10;
export const STARTING_HEALTH = 20;
export const CHARACTER_STARTING_COST = 10;
export interface Stats extends Skills {
    speed: number;
    health: number;
}

export interface Skills {
    shooting: number;
    fighting: number;
    agility: number;
}

export function Character() {
    const [name, setName] = useState('');
    const [cost, setCost] = useState(CHARACTER_STARTING_COST);
    const [stats, setStats] = useState<Stats>({
        shooting: STARTING_SKILL,
        fighting: STARTING_SKILL,
        agility: STARTING_SKILL,
        speed: STARTING_SPEED,
        health: STARTING_HEALTH,
    });

    useEffect(() => {
        setCost(Object.values(stats).reduce((previousCost, _, index) => {
            const currentStatValue = Object.values(stats)[index];
            let statCost = 0;
            if (currentStatValue > 2) {
                statCost += (currentStatValue - 2) * 10;
            }
            return previousCost + statCost;
        }, 0));
    }, [stats]);

    console.log(name);
    console.log(cost);
    return (
        <div className="character">
            <div className="character_header">
                <span> Name: </span>
                <input
                    onChange={(event) => setName(event.target.value)}
                    className="characterName"
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
