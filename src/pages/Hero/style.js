import styled from 'styled-components';
import { Container, color } from '@/theme/global';

export const HeroLayout = styled(Container)`
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-color: ${color.white};
    max-width: 1050px;
    margin: auto;
`;
