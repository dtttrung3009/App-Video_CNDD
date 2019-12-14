import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import VideoContainer from './containers/VideoContainer';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
              <VideoContainer/>
            </Provider>
        );
    }
}
