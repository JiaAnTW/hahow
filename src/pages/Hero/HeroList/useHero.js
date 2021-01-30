import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import { fetchHero } from '@/models/middlewares/hero';

function useHero() {
    const heroListData = useSelector((state) => state.hero);
    const dispatch = useDispatch();

    useEffect(() => {
        if (_.isEmpty(heroListData)) dispatch(fetchHero());
    }, [heroListData, dispatch]);

    return heroListData;
}

export default useHero;
