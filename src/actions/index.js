import {IMAGES, STATS} from "../constants";

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = (images) => ({
    type: IMAGES.LOAD_SUCCESS,
    images
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error
});

const loadImageStats = ()=> ({

    type: STATS.LOAD_CAROUSEL,
});

const setImageStats = (images) => ({
    type: STATS.CAROUSEL_LOAD_SUCCESS,
    images
});

const setImageStatsError = (error) => ({
    type: STATS.CAROUSEL_LOAD_FAIL,
    error
});

export {
    loadImages,
    setImages,
    setError,
    loadImageStats,
    setImageStats,
    setImageStatsError
};

