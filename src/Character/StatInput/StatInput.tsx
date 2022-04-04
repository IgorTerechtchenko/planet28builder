import React from 'react';
import styled from 'styled-components';
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

const StyledStatInput = styled.input`
    width: 50px;
`;

const StatBlock = styled.div`
    margin-left: 20px;
    background-color: darkgrey;
    &:first-child {
        margin-left: initial;
    }
`;

const Title = styled.div`
    text-align: left;
    padding: 2px;
`;

export function StatInput({ statTitle, stats, setStats }: Props) {
    const ROOT_CLASS = 'stat-input';

    return (
        <StatBlock className={ROOT_CLASS}>
            <Title> {statTitle}: </Title>
            <StyledStatInput
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
        </StatBlock>
    );
}
