import React from 'react';

import { CardLayout, CardTitle } from './style';

function HeroCard({ image, title, onClick }) {
    return (
        <CardLayout onClick={onClick}>
            <img src={image} alt={`${title}-image`} />
            <CardTitle>{title}</CardTitle>
        </CardLayout>
    );
}

export default HeroCard;
