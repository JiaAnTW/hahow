import React from 'react';
import { transform } from 'lodash';

import SkillAdder from './SkillAdder';

import useHeroSkill from './useHeroSkill';
import { HeroProfileLayout, SkillAdderList } from './style';

function HeroProfile({ heroId }) {
    const heroSkill = useHeroSkill(heroId);
    return (
        <HeroProfileLayout>
            <SkillAdderList>
                {transform(
                    heroSkill,
                    (init, value, name) => {
                        init.push(
                            <SkillAdder
                                id={heroId}
                                name={name}
                                value={value}
                                key={name}
                            />
                        );
                    },
                    []
                )}
            </SkillAdderList>
            <div></div>
        </HeroProfileLayout>
    );
}

export default HeroProfile;
