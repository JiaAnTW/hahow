import styled from 'styled-components';

export const CardLayout = styled.div`
    display: grid;
    grid-template-rows: 210px 1fr;
    border: 1px solid black;
    padding: 5px;
    width: 200px;
    height: 300px;
`;

export const CardTitle = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
`;
