import styled from 'styled-components';

export const CharacterStats = styled.div`
    display: flex;
    margin-top: 10px;
    width: 100%;
`;

export const CharacterCardWrapper = styled.div`
    border: 2px solid;
    padding: 10px;
    width: 600px;
`
export const CharacterHeader = styled.div`
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CharacterName = styled.span`
    display: flex;
    flex-direction: row;
`;

export const CharacterNameInput = styled.input`
    border: 0px;
    background-color: lightgrey;
`

export const CharacterNameHeader = styled.h3`
    margin: 0px;
    margin-right: 5px;
`;
