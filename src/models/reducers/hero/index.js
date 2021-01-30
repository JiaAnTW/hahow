import { INIT_HERO, INIT_HERO_SKILL } from '@/models/actions/hero';

const initState = {};

const heroReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_HERO: {
            return action.payload.data.reduce((init, currect) => {
                currect.skill = {};
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
        default:
            return state;
    }
};

export default heroReducer;
