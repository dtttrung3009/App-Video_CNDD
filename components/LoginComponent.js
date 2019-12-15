import React, {Component} from 'react';
import {Text, View, Image, Button, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin';
import firebase from 'react-native-firebase';
import { TextInput } from 'react-native-gesture-handler';

const backgroundColor = '#964f8e';

class LoginComponent extends Component {

    componentDidMount() {
        GoogleSignin.configure({
            webClientId:'39216247309-j4r41ff30f8focgg65ndmhpkd7ar4dga.apps.googleusercontent.com',
            offlineAccess: false
        })
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Login';
        let tabBarIcon = () => (
            <Ionicons name='md-keypad' size={24}/>
        );
        return {tabBarLabel, tabBarIcon};
    };
    _signIn() {
        GoogleSignin.signIn()
            .then((user) => {
                console.log(user);
                this.setState({user: user});
                this.props.navigator.push({
                    component: Account
                });
            })
            .catch((err) => {
                console.log('WRONG SIGNIN', err);
            })
            .done();
    }
    async _setupGoogleSignin() {
        try {
            await GoogleSignin.hasPlayServices({ autoResolve: true });
            await GoogleSignin.configure({
                webClientId: 'MY-CLIENT-ID',
                offlineAccess: false
            });

            const user = await GoogleSignin.currentUserAsync();
            console.log(user);
            this.setState({user});
        }
        catch(err) {
            console.log("Play services error", err.code, err.message);
        }
    }
    render() {
        return (

            <View style={{
                flex: 1,
                backgroundColor: '#D8D8D8',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <View>
                <TextInput placeholder="Enter uername" style={{width:312,height:40,borderWidth:2,borderRadius:5,borderColor:'#A4A4A4',marginBottom:20,color:'black',backgroundColor:'white'}}></TextInput>
                <TextInput placeholder="Enter password" secureTextEntry={true} style={{width:312,height:40,borderWidth:2,borderRadius:5,color:'black',backgroundColor:'white',borderColor:'#A4A4A4',marginBottom:20}}></TextInput>
                </View>
                <Button title='Login' style={{padding:20}}></Button>
                <GoogleSigninButton
                    style={{width: 312, height: 48,marginTop:20}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={() => { this._signIn(); }}/>
                    <View style={{flexDirection:"row"}}>
                    <Ionicons  name='logo-facebook' color="blue" size={24}/>

                    </View>
            </View>
        );
    }
}

export default LoginComponent;
