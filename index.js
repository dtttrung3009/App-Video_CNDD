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
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
const sagaMiddleware=createSagaMiddleware();
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/InfoComponent';
import UserComponent from './components/UserComponent';
let store=createStore(allReducers,applyMiddleware(sagaMiddleware));
const App=()=>(
    <Provider store={store}>
        <AppContainer/>
    </Provider>
)
sagaMiddleware.run(rootSaga)
const MainStack = createBottomTabNavigator(
    {
        Home: {
            screen: HomeComponent,
        },
        Login:{
            screen:LoginComponent,
        },
        Info: {
            screen: InfoComponent,
        },
        User:{
            screen:UserComponent,
        },
    },
    {
        initialRouteName:'Home',
    },
);


const AppContainer = createAppContainer(MainStack);
class AppVideo extends React.Component {
    render() {
        return <AppContainer/>;
    }
}

AppRegistry.registerComponent(appName, () => App);
