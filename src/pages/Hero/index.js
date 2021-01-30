import React from 'react';
import { useParams } from 'react-router-dom';

import HeroList from './HeroList';
import HeroProfile from './HeroProfile';

import { HeroLayout } from './style';

function Hero() {
    const { heroId } = useParams();

    return (
        <HeroLayout>
            <HeroList />
            {heroId && <HeroProfile />}
        </HeroLayout>
    );
}

export default Hero;
