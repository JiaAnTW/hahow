import styled from 'styled-components';
import { Container, color } from '@/css/global';

export const HeroLayout = styled(Container)`
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-color: ${color.white};
    min-width: 100%;
    min-height: 100%;
`;
