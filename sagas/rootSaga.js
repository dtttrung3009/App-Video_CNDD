import {all} from 'redux-saga/effects';
import {watchGetMovies} from './VideoSagas';

export default function* rootSaga() {
    yield all([
        watchGetMovies(),
    ]);
}
