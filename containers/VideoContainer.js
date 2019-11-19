import {connect} from 'react-redux';
import React from 'react';
import {fetchVideoAction} from '../actions/indexAction';
import VideoComponent from '../components/VideoComponent';

const mapStateToProps = (state) => {
    console.log(`Video ${JSON.stringify(state.videos)}`);
    return {
        videos: state.videoReducers,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchVideoAction());
        }
    };
};
const VideoContainer  = connect(mapStateToProps, mapDispatchToProps)(VideoComponent);
export default VideoContainer;
