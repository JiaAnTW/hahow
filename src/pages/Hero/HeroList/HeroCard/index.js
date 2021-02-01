import React, { memo, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Card, CardTitle } from '@/component/Card/style';

function HeroCard({ id, image, title }) {
    const history = useHistory();
    const { heroId } = useParams();

    const handleClick = useCallback(() => {
        history.push(`/heroes/${id}`);
    }, [id, history]);

    return (
        <Card onClick={handleClick} selected={heroId === id}>
            <img src={image} alt={`${title}-image`} />
            <CardTitle>{title}</CardTitle>
        </Card>
    );
}

export default memo(HeroCard);
