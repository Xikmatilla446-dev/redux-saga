import { STATS } from "../constants";

const ErrorCarouselReducer= (state = null, action) => {

    switch (action.type) {

        case STATS.CAROUSEL_LOAD_FAIL:
            return action.error;

        case STATS.LOAD_CAROUSEL:
        case STATS.CAROUSEL_LOAD_SUCCESS:
            return null;

        default:
            return state;

    }
};

export default ErrorCarouselReducer;

