import React, {Component} from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(`Flat list ${this.props.url}`);
    }

    render() {
        return (
            <View style={{height: 200, width: '100%'}}>
                <WebView
                    scrollEnabled={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: this.props.url}}
                />
            </View>
        );
    }
}

export default FlatListItem;
