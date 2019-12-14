import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

const backgroundColor = '#007256';

class InfoComponent extends Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let title='Info';
        let tabBarLabel = 'Info ';
        let tabBarIcon = () => (
            <Image
                source={require('../icons/info-icon.png')}
                style={{width: 26, height: 26, tintColor: backgroundColor}}></Image>
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
                    This is Info Screen
                </Text>
            </View>
        );
    }
}

export default InfoComponent;
