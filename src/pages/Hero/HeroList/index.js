import React, { memo } from 'react';
import { map } from 'lodash';

import HeroCard from './HeroCard';
import useHero from './useHero';

import { HeroListLayout } from './style';

function HeroList() {
    const heroListData = useHero();
    return (
        <HeroListLayout>
            {map(heroListData, (hero) => (
                <HeroCard
                    key={hero.id}
                    id={hero.id}
                    image={hero.image}
                    title={hero.name}
                />
            ))}
        </HeroListLayout>
    );
}

export default memo(HeroList);
