import { Weapon, weaponSizes, weaponTypes } from '../Common/Weapon';

const WEAPON_LIST: Weapon[]  = [
    {
        title: 'Spiked Mace',
        cost: 15,
        type: weaponTypes.MELEE,
        size: weaponSizes.ONE_HANDED,
        range: null,
        damage: '2d6',
        specialRules: [{
            title: 'Bash',
            text: 'Models damaged by this weapon can take one less action in their next activation.',
        }],
    },
    {
        title: 'Sword',
        cost: 15,
        type: weaponTypes.MELEE,
        size: weaponSizes.ONE_HANDED,
        range: null,
        damage: 'd10',
        specialRules: [{
            title: 'Parry',
            text: 'Model armed with this weapon can make a Fight check when being attacked in melee. If check is successfull the attack counts as missed.',
        }]
    },
    {
        title: 'Crossbow',
        cost: 25,
        type: weaponTypes.RANGED,
        size: weaponSizes.TWO_HANDED,
        damage: 'd12',
        range: '16',
        specialRules: [{
            title: 'Armor Piercing',
            text: 'Upon hit substract 1d4 from targets armor value.',
        }]
    }
];

export async function getWeaponList() {
    return WEAPON_LIST;
}