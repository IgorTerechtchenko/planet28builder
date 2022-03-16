import { Item } from './Item';

export enum weaponSizes {
    TWO_HANDED = '2 handed',
    ONE_HANDED = '1 handed',
}

export enum weaponTypes {
    MELEE = 'melee',
    RANGED = 'ranged',
}

export interface Weapon extends Item {
    type: weaponTypes;
    range: string | null;
    damage: string;
    size: weaponSizes,
    specialRules: {
        title: string;
        text: string;
    }[]
}
