import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import { fetchHeroSkillById } from '@/models/middlewares/hero';

function useHeroSkill(heroId) {
    const heroListData = useSelector((state) => state.hero);
    const dispatch = useDispatch();

    useEffect(() => {
        // 這樣寫是為了避免使用者直接進入heroes/heroId的狀況
        if (!_.isEmpty(heroListData) && _.isEmpty(heroListData[heroId].skill))
            dispatch(fetchHeroSkillById(heroId));
    }, [heroListData, dispatch, heroId]);

    return heroListData[heroId] ? heroListData[heroId].skill : {};
}

export default useHeroSkill;
