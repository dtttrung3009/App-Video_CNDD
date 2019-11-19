import {
    FETCH_FAILED,
    FETCH_SUCCESS,FETCH_VIDEO
} from '../actions/actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* getVideo() {
    try {
        const receivedVideos = yield Api.getVideoFromApi();
        yield put({type: FETCH_SUCCESS, receivedVideos: receivedVideos});
        console.log(receivedVideos);
    } catch (e) {
        yield put({type: FETCH_FAILED, error: e});
        console.log(`error ${e}`);
    }
}

export function* watchGetMovies() {
    yield takeLatest(FETCH_VIDEO, getVideo);
}
