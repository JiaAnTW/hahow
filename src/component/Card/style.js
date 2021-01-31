import styled from 'styled-components';
import { color } from '@/theme/global';

export const Card = styled.div`
    display: grid;
    grid-template-rows: 210px 1fr;
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 5px;
    width: 200px;
    height: 300px;
    background-color: ${({ selected }) =>
        selected ? color.darkGreen : color.white};
    color: ${({ selected }) => (selected ? color.white : color.black)};
    margin: 10px;
`;

export const CardTitle = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
`;
