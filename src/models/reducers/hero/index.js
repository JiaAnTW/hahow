import { INIT_HERO } from '@/models/actions/hero';

const initState = {
    data: [],
};

const heroReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_HERO: {
            return {
                data: [],
            };
        }
        default:
            return state;
    }
};

export default heroReducer;
