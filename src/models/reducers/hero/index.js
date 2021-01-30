import {
    INIT_HERO,
    INIT_HERO_SKILL,
    ADD_HERO_SKILL,
    SUB_HERO_SKILL,
} from '@/models/actions/hero';

const initState = {};

const heroReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_HERO: {
            return action.payload.data.reduce((init, currect) => {
                currect.skill = {};
                currect.skillPoints = 0;
                init[currect.id] = currect;
                return init;
            }, {});
        }
        case INIT_HERO_SKILL: {
            const { data, heroId } = action.payload;
            const stateNext = { ...state };

            stateNext[heroId].skill = data;

            return stateNext;
        }
        case ADD_HERO_SKILL: {
            const { heroId, category } = action.payload;
            const stateNext = { ...state };

            if (state[heroId].skillPoints > 0) {
                stateNext[heroId].skill[category]++;
                stateNext[heroId].skillPoints--;
            }

            return stateNext;
        }
        case SUB_HERO_SKILL: {
            const { heroId, category } = action.payload;
            const stateNext = { ...state };

            if (stateNext[heroId].skill[category] != 0) {
                stateNext[heroId].skill[category]--;
                stateNext[heroId].skillPoints++;
            }

            return stateNext;
        }
        default:
            return state;
    }
};

export default heroReducer;
