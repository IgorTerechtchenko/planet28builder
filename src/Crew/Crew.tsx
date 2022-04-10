import React, { useState, useReducer, useEffect } from 'react';
import { Character, CharacterCard, getBlankCharacter } from '../Character';
import { Trait } from '../Common/Trait';
import { Weapon } from '../Common/Weapon';
import { getTraitsList } from '../MockBackend/GetTraitsList';
import { getWeaponList } from '../MockBackend/GetWeaponList';

interface State {
    crew: Character[];
}

export type Action =
    {
        type: 'update-crew',
        payload: {
            memberIndex: number;
            member: Character;
        }
    }
    | {
        type: 'add-member';
    }

export function Crew() {
    const initialState: State = {
        crew: [],
    }


    function reducer(state: State, action: Action): State {
        switch(action.type) {
            case 'update-crew': {
                const newCrew = [...state.crew];
                newCrew[action.payload.memberIndex] = action.payload.member;
                return {
                    ...state,
                    crew: newCrew,
                };
            }
            case 'add-member': {
                const newCrew = [...state.crew, getBlankCharacter()];
                return {
                    ...state,
                    crew: newCrew,
                }
            }
            default: {
                return state;
            }
        }
    }

    const [availableWeapons, setAvailableWeapons] = useState<Weapon[]>([]);
    const [availableTraits, setAvailableTraits] = useState<Trait[]>([]);
    const [state, dispatch] = useReducer(reducer, initialState);

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

    console.log(state);

    return <div>
        {
            state.crew.map((character, index) => {
                return (
                    <CharacterCard
                        key={index}
                        availableWeapons={availableWeapons}
                        availableTraits={availableTraits}
                        character={character}
                        dispatch={dispatch}
                        index={index}
                    />
                )
            })
        }
        <button onClick={()=>{dispatch({type: 'add-member'})}}>
            +
        </button>
    </div>
}
