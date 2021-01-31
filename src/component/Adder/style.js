import styled from 'styled-components';
import { Button } from '@/theme/global';

export const AdderLayout = styled.div`
    display: grid;
    width: 150px;
    grid-template-columns: 50px auto 50px;
`;

export const SquareButton = styled(Button)`
    width: 50px;
    height: 50px;
`;

export const ValueText = styled.p`
    text-align: center;
`;
