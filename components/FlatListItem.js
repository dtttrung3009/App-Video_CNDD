import React, {Component} from 'react';
import {View,Text} from 'react-native';
import WebView from 'react-native-webview';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{height: 300, width: '100%'}}>
                <WebView
                    scrollEnabled={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: this.props.url}}
                />
                <View style={{
                    height: 30,
                    fontSize:16,
                    fontStyle:"bold",
                    alignItems:'center',
                    marginTop:5
                }}>
                    <Text>{this.props.description}</Text>
                </View>
            </View>
        );
    }
}

export default FlatListItem;
