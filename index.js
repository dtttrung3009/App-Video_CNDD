/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/indexReducer';
import rootSaga from './sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';
import VideoContainer from './containers/VideoContainer';

const sagaMiddleware=createSagaMiddleware();
let store=createStore(allReducers,applyMiddleware(sagaMiddleware));
const App=()=>(
    <Provider store={store}>
        <VideoContainer/>
    </Provider>
)
sagaMiddleware.run(rootSaga)
AppRegistry.registerComponent(appName, () => App);
