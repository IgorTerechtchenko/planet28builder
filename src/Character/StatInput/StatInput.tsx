import React from 'react';
import {
    Stats,
    statsWithStartingValue,
} from '../index';

interface Props {
    statTitle: keyof Stats;
    statValue: number;
    stats: Stats;
    setStats: (value: Stats) => void;
}

export function StatInput({ statTitle, stats, setStats }: Props) {
    const ROOT_CLASS = 'stat-input';

    return (
        <div className={ROOT_CLASS}>
            <span className={`${ROOT_CLASS}__title`}> {statTitle}: </span>
            <input
                type='number'
                onChange={(event) => {
                    const newStats = {
                        ...stats
                    };
                    newStats[statTitle] = Number(event.target.value);
                    setStats(newStats);
                }}
                value={stats[statTitle]}
                min={statsWithStartingValue[statTitle]}
            />
        </div>
    );
}
