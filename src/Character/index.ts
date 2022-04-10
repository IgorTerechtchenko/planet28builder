import { Weapon } from '../Common/Weapon';
import { Trait } from '../Common/Trait';

export { CharacterCard } from './Character';

export interface Stats {
    speed: number;
    health: number;
    shooting: number;
    fighting: number;
    agility: number;
}

export interface Character {
    name: string;
    cost: number;
    stats: Stats;
    weapons: Weapon[],
    traits: Trait[],
}

export function getBlankCharacter(): Character {
    return {
        name: '',
        cost: CHARACTER_STARTING_COST,
        stats: {
            speed: STARTING_SPEED,
            health: STARTING_HEALTH,
            shooting: STARTING_SKILL,
            fighting: STARTING_SKILL,
            agility: STARTING_SKILL,
        },
        weapons: [],
        traits: [],
    }
}

export const STARTING_SKILL = 2;
export const STARTING_SPEED = 10;
export const STARTING_HEALTH = 20;
export const CHARACTER_STARTING_COST = 10;

export enum statsWithStartingValue {
    shooting = STARTING_SKILL,
    fighting = STARTING_SKILL,
    agility = STARTING_SKILL,
    speed = STARTING_SPEED,
    health = STARTING_HEALTH,
}
