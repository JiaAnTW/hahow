import React from 'react';

import Adder from '@/component/Adder';

import { SkillAdderLayout, NameText } from './style';

function SkillAdder({ id, name, value }) {
    return (
        <SkillAdderLayout>
            <NameText>{name.toUpperCase()}</NameText>
            <Adder value={value} />
        </SkillAdderLayout>
    );
}

export default SkillAdder;
