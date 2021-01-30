import { INIT_HERO, INIT_HERO_SKILL } from '@/models/actions/hero';

export const fetchHero = () => {
    return (dispatch) => {
        fetch('https://hahow-recruit.herokuapp.com/heroes', {
            headers: {
                'content-type': 'application/json',
            },
            mode: 'cors',
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: INIT_HERO,
                    payload: { data },
                });
            })
            .catch((e) => console.log('錯誤:', e));
    };
};

export const fetchHeroSkillById = (heroId) => {
    return (dispatch) => {
        fetch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, {
            headers: {
                'content-type': 'application/json',
            },
            mode: 'cors',
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: INIT_HERO_SKILL,
                    payload: { data, heroId },
                });
            })
            .catch((e) => console.log('錯誤:', e));
    };
};
