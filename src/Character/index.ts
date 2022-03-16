export { Character } from './Character';
export interface Stats {
    speed: number;
    health: number;
    shooting: number;
    fighting: number;
    agility: number;
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
