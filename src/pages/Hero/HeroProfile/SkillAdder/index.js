import React, { memo } from 'react';

import Adder from '@/component/Adder';

import useSkillChange from './useSkillChange';
import { SkillAdderLayout, NameText } from './style';

function SkillAdder({ name, value }) {
    const { addSkillValue, subSkillValue } = useSkillChange(name);
    return (
        <SkillAdderLayout>
            <NameText>{name.toUpperCase()}</NameText>
            <Adder value={value} onAdd={addSkillValue} onSub={subSkillValue} />
        </SkillAdderLayout>
    );
}

export default memo(SkillAdder);
