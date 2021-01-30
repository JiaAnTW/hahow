import React, { memo } from 'react';

import Adder from '@/component/Adder';

import useSkillChange from './useSkillChange';
import { SkillAdderLayout, NameText } from './style';

function SkillAdder({ heroId, name, value }) {
    const { addSkillValue, subSkillValue } = useSkillChange(heroId, name);
    return (
        <SkillAdderLayout>
            <NameText>{name.toUpperCase()}</NameText>
            <Adder value={value} onAdd={addSkillValue} onSub={subSkillValue} />
        </SkillAdderLayout>
    );
}

export default memo(SkillAdder);
