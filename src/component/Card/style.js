import styled from 'styled-components';

export const Card = styled.div`
    display: grid;
    grid-template-rows: 210px 1fr;
    border: 1px solid black;
    padding: 5px;
    width: 200px;
    height: 300px;
    background-color: ${({ selected }) => (selected ? 'red' : 'white')};
    margin: 10px;
`;

export const CardTitle = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
`;
