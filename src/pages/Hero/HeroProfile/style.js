import styled from 'styled-components';
import { color } from '@/theme/global';

export const HeroProfileLayout = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: auto 250px;
    padding: 15px;
    margin-top: 30px;
    box-sizing: border-box;
    background-color: ${color.whiteGreen};

    @media (max-width: 768px) {
        grid-template-columns: auto;
    }
`;

export const SkillAdderList = styled.div``;
