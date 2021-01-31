import styled from 'styled-components';
import { Button } from '@/css/global';

export const SubmitFormLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const NameText = styled.p`
    text-align: center;
`;

export const SubmitButton = styled(Button)`
    width: 200px;
    height: 50px;
`;
