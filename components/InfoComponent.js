import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const backgroundColor = '#007256';

class InfoComponent extends Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let title = 'Info';
        let tabBarLabel = 'Info ';
        let tabBarIcon = () => (
            <Image
                source={require('../icons/info-icon.png')}
                style={{width: 26, height: 26, tintColor: backgroundColor}}></Image>
        );
        return {title, tabBarLabel, tabBarIcon};
    };

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
            }}>
                <View
                    style={{
                        paddingTop: 10,
                        backgroundColor: '#000000',
                        height: 60,
                        width:"100%",
                        flexDirection: 'row',
                        justifyContent:'center'
                    }}>
                    <Text style={{color: 'white', marginLeft: 20, paddingTop: 10, fontSize:24,}}>APP VIDEO</Text>
                </View>
                <Image
                style={{
                    width:300,
                    height:400,
                    resizeMode: 'contain'
                }}
                    source={require('../icons/anh.jpg')}/>
                <View style={{
                    height: 8,
                    backgroundColor: '#151515',
                }}/>
                <Text style={{
                    fontSize:30,
                    color:'#585858'
                }}>My team </Text>
                <View style={{
                    height: 8,
                    backgroundColor: '#ECF0F1',
                }}/>
                <Text>Đặng Thanh Trung</Text>
                <Text>Trần Văn Tú</Text>
            </View>
        );
    }
}

export default InfoComponent;
