import styled from 'styled-components';
import { color } from '@/theme/global';

export const HeroListLayout = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: ${color.whiteGreen};
`;

export const HeroCardList = styled.div`
    display: flex;
    padding: 15px;
    flex-wrap: wrap;
`;
