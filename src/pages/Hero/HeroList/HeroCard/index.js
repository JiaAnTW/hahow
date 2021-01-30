import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Card, CardTitle } from '@/component/Card/style';

function HeroCard({ id, image, title }) {
    const history = useHistory();

    const handleClick = useCallback(() => {
        history.push(`/heroes/${id}`);
    }, [id, history]);

    return (
        <Card onClick={handleClick}>
            <img src={image} alt={`${title}-image`} />
            <CardTitle>{title}</CardTitle>
        </Card>
    );
}

export default HeroCard;
