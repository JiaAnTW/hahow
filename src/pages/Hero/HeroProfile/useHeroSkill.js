import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { fetchHeroSkillById } from '@/models/middlewares/hero';

function useHeroSkill() {
    const { heroId } = useParams();
    const heroListData = useSelector((state) => state.hero);
    const dispatch = useDispatch();

    useEffect(() => {
        // 這樣寫是為了避免使用者直接進入heroes/heroId導致heroListData還沒被存取的狀況
        // 加入判斷heroListData[heroId]是為了避免存取不存在hero
        if (
            !isEmpty(heroListData) &&
            heroListData[heroId] &&
            isEmpty(heroListData[heroId].skill)
        )
            dispatch(fetchHeroSkillById(heroId));
    }, [heroListData, dispatch, heroId]);

    return heroListData[heroId] ? heroListData[heroId].skill : {};
}

export default useHeroSkill;
