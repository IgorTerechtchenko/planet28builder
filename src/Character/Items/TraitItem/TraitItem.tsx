import React from 'react';
import { Trait } from '../../../Common/Trait';

interface Props {
    deleteItem: (id: number) => void;
    trait: Trait;
}

export function TraitItem({
    deleteItem,
    trait: {
        title,
        cost,
        ruleText,
    },
}: Props) {
    const ROOT_CLASS = 'weapon';

    return (
        <div className={ROOT_CLASS}>
            <span>
                {`
                    ${title} | ${cost}
                    ${ruleText}
                `}
            </span>
        </div>
    );
}
