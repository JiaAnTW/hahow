import React from 'react';

import HeroCard from '@/component/HeroCard';
import useHero from './useHero';

import { HeroListLayout } from './style';

function HeroList() {
    const heroListData = useHero();
    return (
        <HeroListLayout>
            {heroListData &&
                heroListData.map((hero) => (
                    <HeroCard
                        key={hero.id}
                        image={hero.image}
                        title={hero.name}
                    />
                ))}
        </HeroListLayout>
    );
}

export default HeroList;
