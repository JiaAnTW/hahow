import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import useSubmit from './useSubmit';
import { SubmitFormLayout, SubmitButton } from './style';

function SubmitForm() {
    const { heroId } = useParams();
    const skillPoints = useSelector((state) => state.hero[heroId].skillPoints);

    const { handleSubmit } = useSubmit(heroId, skillPoints);

    return (
        <SubmitFormLayout>
            <p>{`剩餘點數: ${skillPoints}`}</p>
            <SubmitButton onClick={handleSubmit}>儲存</SubmitButton>
        </SubmitFormLayout>
    );
}

export default memo(SubmitForm);
