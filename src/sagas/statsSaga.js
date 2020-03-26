import { takeEvery, select, call, put} from "redux-saga/effects";
import { STATS } from "../constants";
import { fetchImageStats } from "../api";
import { setImageStats, setImageStatsError} from "../actions";


function* handleCarouselLoad() {

    try {
        const images = yield call(fetchImageStats);
        yield put(setImageStats(images));


    }catch (error) {
        //dispatch error
        debugger
        yield put(setImageStatsError(error.toString()));
    }


}


export default function* watchCarouselLoad() {

    yield takeEvery(STATS.LOAD_CAROUSEL, handleCarouselLoad)

}

