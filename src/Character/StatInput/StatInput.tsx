import React from 'react';
import { keys } from 'ts-transformer-keys';
import {
    Stats,
    Skills,
    STARTING_SKILL,
    STARTING_SPEED,
    STARTING_HEALTH,
} from '../Character';

interface Props {
    statName: keyof Stats;
    statValue: number;
    stats: Stats;
    setStats: (value: Stats) => void;
}

export function StatInput({ statName, stats, setStats }: Props) {
    return (
        <div>
            <span> {statName}: </span>
            <input
                type='number'
                onChange={(event) => {
                    const newStats = {
                        ...stats
                    };
                    newStats[statName] = Number(event.target.value);
                    setStats(newStats);
                }}
                value={stats[statName]}
                min={
                    isSkill(statName)
                        ? STARTING_SKILL
                        : statName === 'health'
                            ? STARTING_HEALTH
                            : STARTING_SPEED
                }
            />
        </div>
    )
}
