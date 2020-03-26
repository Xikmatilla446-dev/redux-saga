import {STATS} from "../constants";

const loadingCarouselReducer = (state = false, action) => {

    switch (action.type) {

        case STATS.LOAD_CAROUSEL:
            return true;

        case STATS.CAROUSEL_LOAD_SUCCESS:
            return false;

        case STATS.CAROUSEL_LOAD_FAIL:
            return false;

        default:
            return state;

    }
};

export default loadingCarouselReducer;

