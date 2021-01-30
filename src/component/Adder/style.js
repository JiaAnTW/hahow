import styled from 'styled-components';

export const AdderLayout = styled.div`
    display: grid;
    width: 150px;
    grid-template-columns: 50px auto 50px;
`;

export const SquareButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid black;
    outline: none;
`;

export const ValueText = styled.p`
    text-align: center;
`;
