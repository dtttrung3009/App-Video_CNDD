import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const backgroundColor = '#e97600';

class UserComponent extends Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let title='User';
        let tabBarLabel = 'User ';
        let tabBarIcon = () => (
            <Ionicons name='md-person' size={24}/>
        );
        return {title,tabBarLabel, tabBarIcon};
    };

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
                    This is User Screen
                </Text>
            </View>
        );
    }
}

export default UserComponent;
