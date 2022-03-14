import React from 'react';
import {
    Stats,
    statsWithStartingValue,
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
                min={statsWithStartingValue[statName]}
            />
        </div>
    )
}
