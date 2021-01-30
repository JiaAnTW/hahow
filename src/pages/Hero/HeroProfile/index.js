import React from 'react';
import { transform, isEmpty } from 'lodash';

import SkillAdder from './SkillAdder';
import SubmitForm from './SubmitForm';

import useHeroSkill from './useHeroSkill';
import { HeroProfileLayout, SkillAdderList } from './style';

function HeroProfile() {
    const heroSkill = useHeroSkill();
    return (
        <HeroProfileLayout>
            <SkillAdderList>
                {transform(
                    heroSkill,
                    (init, value, name) => {
                        init.push(
                            <SkillAdder name={name} value={value} key={name} />
                        );
                    },
                    []
                )}
            </SkillAdderList>
            {!isEmpty(heroSkill) && <SubmitForm />}
        </HeroProfileLayout>
    );
}

export default HeroProfile;
