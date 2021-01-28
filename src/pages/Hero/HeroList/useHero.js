import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchHero } from '@/models/middlewares/hero';

function useHero() {
    const heroListData = useSelector((state) => state.hero);
    const dispatch = useDispatch();

    useEffect(() => {
        if (heroListData.length === 0) dispatch(fetchHero());
    }, [heroListData]);

    return heroListData;
}

export default useHero;
