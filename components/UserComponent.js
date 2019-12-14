import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class UserComponent extends Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let title = 'User';
        let tabBarLabel = 'User ';
        let tabBarIcon = () => (
            <Ionicons name='md-person' size={24}/>
        );
        return {title, tabBarLabel, tabBarIcon};
    };

    render() {
        return (
            <View>
                <View
                    style={{
                        paddingTop: 10,
                        paddingLeft: 10,
                        backgroundColor: '#000000',
                        height: 60,
                        flexDirection: 'row',
                    }}>
                    <Ionicons name='md-person' size={30} color={'white'}/>
                    <Text style={{color: 'white', marginLeft: 20, paddingTop: 10}}>Đăng nhập</Text>
                </View>
                <View style={{
                    height: 8,
                    backgroundColor: '#ECF0F1',
                }}/>
                <View>
                    <View
                        style={{
                            paddingTop: 10,
                            paddingLeft: 10,
                            height: 50,
                            flexDirection: 'row',
                        }}>
                        <Ionicons name='md-time' size={30} color={'#2ECCFA'}/>
                        <Text style={{marginLeft: 20, paddingTop: 5}}>Lịch sử</Text>
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor: '#ECF0F1',
                    }}/>
                </View>
                <View>
                    <View
                        style={{
                            paddingTop: 10,
                            paddingLeft: 10,
                            height: 50,
                            flexDirection: 'row',
                        }}>
                        <Ionicons name='md-contact' size={30} color={'#2ECCFA'}/>
                        <Text style={{marginLeft: 20, paddingTop: 5}}>Mời bạn bè</Text>
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor: '#ECF0F1',
                    }}/>
                </View>
                <View>
                    <View
                        style={{
                            paddingTop: 10,
                            paddingLeft: 10,
                            height: 50,
                            flexDirection: 'row',
                        }}>
                        <Ionicons name='md-mail' size={30} color={'#2ECCFA'}/>
                        <Text style={{marginLeft: 20, paddingTop: 5}}>Góp ý</Text>
                    </View>
                </View>
                <View style={{
                    height: 8,
                    backgroundColor: '#ECF0F1',
                }}/>
                <View>
                    <View
                        style={{
                            paddingTop: 10,
                            paddingLeft: 10,
                            height: 50,
                            flexDirection: 'row',
                        }}>
                        <Ionicons name='md-help' size={30} color={'#151515'}/>
                        <Text style={{marginLeft: 20, paddingTop: 5}}>Chính sách</Text>
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor: '#ECF0F1',
                    }}/>
                </View>
                <View>
                    <View
                        style={{
                            paddingTop: 10,
                            paddingLeft: 10,
                            height: 50,
                            flexDirection: 'row',
                        }}>
                        <Ionicons name='md-clipboard' size={30} color={'#151515'}/>
                        <Text style={{marginLeft: 20, paddingTop: 5}}>Giới thiệu</Text>
                    </View>
                </View>
                <View style={{
                    height: 8,
                    backgroundColor: '#ECF0F1',
                }}/>
                <View style={{alignItems:'center', marginTop:10}}>
                    <Text>Version 1.1</Text>
                </View>
            </View>
        );
    }
}

export default UserComponent;
