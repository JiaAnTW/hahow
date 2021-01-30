import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ADD_HERO_SKILL, SUB_HERO_SKILL } from '@/models/actions/hero';

function useSkillChange(category) {
    const { heroId } = useParams();
    const dispatch = useDispatch();

    const addSkillValue = useCallback(() => {
        dispatch({
            type: ADD_HERO_SKILL,
            payload: { heroId, category },
        });
    }, [heroId, category, dispatch]);

    const subSkillValue = useCallback(() => {
        dispatch({
            type: SUB_HERO_SKILL,
            payload: { heroId, category },
        });
    }, [heroId, category]);

    return { addSkillValue, subSkillValue, dispatch };
}

export default useSkillChange;
