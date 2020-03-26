import { combineReducers } from "redux";


import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';
import loadingCarouselReducer from './loadingCarouselReducer';
import ErrorCarouselReducer from './ErrorCarouselReducer';


const rootReducer = combineReducers({
   isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
    loadingCarousel: loadingCarouselReducer,
    errorCarousel: ErrorCarouselReducer,

});

export default rootReducer;
