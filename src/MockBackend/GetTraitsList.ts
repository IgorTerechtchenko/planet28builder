import { Trait } from "../Common/Trait";

const TRAIT_LIST: Trait[] = [
    {
        cost: 10,
        title: 'Tough',
        ruleText: 'This model has +1 armor value.',
    },
    {
        title: 'Brave',
        ruleText: 'This model never has to take Break Tests.',
        cost: 15,
    },
    {
        title: 'Cursed',
        cost: -10,
        ruleText: 'When making a skill test roll 2d10 and choose the highest result.',
    }
]

export async function getTraitsList() {
    return TRAIT_LIST;
}