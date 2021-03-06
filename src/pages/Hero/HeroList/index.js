import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { map } from 'lodash';

import HeroCard from './HeroCard';
import useHero from './useHero';

import { HeroListLayout, HeroCardList } from './style';

function HeroList() {
    const heroListData = useHero();
    return (
        <HeroListLayout>
            <HeroCardList>
                {map(heroListData, (hero) => (
                    <HeroCard
                        key={hero.id}
                        id={hero.id}
                        image={hero.image}
                        title={hero.name}
                    />
                ))}
            </HeroCardList>
        </HeroListLayout>
    );
}

export default memo(HeroList);
