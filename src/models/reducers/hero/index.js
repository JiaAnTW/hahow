import { INIT_HERO } from '@/models/actions/hero';

const initState = [];

const heroReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_HERO: {
            return action.payload.data;
        }
        default:
            return state;
    }
};

export default heroReducer;
