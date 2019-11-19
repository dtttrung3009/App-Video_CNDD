import {FETCH_VIDEO, FETCH_FAILED,FETCH_SUCCESS} from '../actions/actionTypes';

const videoReducers = (videos = [], action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            console.log(`Received video ${JSON.stringify(action.receivedVideos)}`);
            return action.receivedVideos;
        case FETCH_FAILED:
            return action.error;
        default:
            return videos;
    }
};
export default videoReducers;
