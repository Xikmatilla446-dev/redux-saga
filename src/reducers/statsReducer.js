import { STATS } from '../constants';




const statsReducer = (state =[], action) => {
    switch (action.type) {

        case STATS.CAROUSEL_LOAD_SUCCESS:
            return [...state, ...action.images];

        default:
            return state;
    }
};

export default statsReducer;
