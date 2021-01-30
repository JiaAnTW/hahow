import React from 'react';

import HeroList from './HeroList';
import HeroProfile from './HeroProfile';

import { HeroLayout } from './style';

function Hero({
    match: {
        params: { heroId },
    },
}) {
    return (
        <HeroLayout>
            <HeroList />
            {heroId && <HeroProfile heroId={heroId} />}
        </HeroLayout>
    );
}

export default Hero;
