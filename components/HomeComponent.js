import React, {Component} from 'react';
import VideoContainer from '../containers/VideoContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeComponent extends Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Home';
        let tabBarIcon = () => (
            <Ionicons name='md-play-circle' size={24}/>
        );
        return {tabBarLabel, tabBarIcon};
    };

    render() {
        return (
          <VideoContainer/>
        );
    }
}

export default HomeComponent;
