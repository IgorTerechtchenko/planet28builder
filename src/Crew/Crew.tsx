import React, { useState, useEffect } from 'react';
import { Character } from '../Character';
import { Trait } from '../Common/Trait';
import { Weapon } from '../Common/Weapon';
import { getTraitsList } from '../MockBackend/GetTraitsList';
import { getWeaponList } from '../MockBackend/GetWeaponList';

export function Crew() {
    const [availableWeapons, setAvailableWeapons] = useState<Weapon[]>([]);
    const [availableTraits, setAvailableTraits] = useState<Trait[]>([]);

    useEffect(() => {
        async function getWeapons() {
            setAvailableWeapons(await getWeaponList());
        }
        getWeapons();
        async function getTraits() {
            setAvailableTraits(await getTraitsList());
        }
        getTraits();
    }, []);

    return <div>
        <Character
            availableWeapons={availableWeapons}
            availableTraits={availableTraits}
        />
    </div>
}
