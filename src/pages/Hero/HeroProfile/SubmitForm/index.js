import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import useSubmit from './useSubmit';
import { SubmitFormLayout, SubmitButton } from './style';

function SubmitForm() {
    const { heroId } = useParams();
    const skillPoints = useSelector((state) => state.hero[heroId].skillPoints);

    const { finish, handleSubmit } = useSubmit(heroId, skillPoints);

    return (
        <SubmitFormLayout>
            <p>{`剩餘點數: ${skillPoints}`}</p>
            <SubmitButton onClick={handleSubmit} disabled={!finish}>
                {finish ? '儲存' : '傳送中'}
            </SubmitButton>
        </SubmitFormLayout>
    );
}

export default memo(SubmitForm);
