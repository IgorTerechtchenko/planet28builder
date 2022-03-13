import React, { useState } from "react";

export function Character() {
    const [name, setName] = useState('');

    console.log(name);
    return (
        <div className="character">
            <div className="header">
                <span> Name: </span><input onChange={(event) => setName(event.target.value)} className="characterName" value={name}/>
                <span className="character-cost"> cost: {} </span>
            </div>
            <div className="stats">
                <span> Shooting: </span><input type='number'/>
                <span> Fighting: </span><input type='number'/>
                <span> Agility: </span><input type='number'/>
                <span> Speed: </span><input type='number'/>
                <span> Health: </span><input type='number'/>
            </div>
            <div className="traits"></div>
            <div className="equipment"></div>
        </div>
    )
}
