import {FETCH_VIDEO} from './actionTypes';

export const fetchVideoAction = () => {
    console.log('fetch video action ok')
    return {
        type: FETCH_VIDEO,
    };
};
