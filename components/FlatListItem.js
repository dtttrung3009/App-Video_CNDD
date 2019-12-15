import React, {Component} from 'react';
import {View, Text} from 'react-native';
import WebView from 'react-native-webview';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
    }
    //
    // getUrl(url) {
    //     let separator = 'videos/';
    //     let newUrl = 'none';
    //     let index = url.indexOf(separator);
    //     if (index > 0) {
    //         let urlsplt = url.split(separator, 2);
    //         let id = urlsplt[1].split('/');
    //         newUrl = 'https://www.facebook.com/video/embed?video_id=' + id;
    //     }
    //     return newUrl;
    // }

    render() {
        return (
            <View style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
            }}>
                <View style={{height: 300, width: '100%'}}>
                    <WebView
                        scrollEnabled={true}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        allowsFullscreenVideo={true}
                        source={{uri: this.props.url}}
                    />

                    <View style={{
                        marginTop:2,
                        height: 40,
                        backgroundColor: '#ECF0F1',
                        alignItems: 'center',
                    }}>
                        <Text
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight:"bold",
                                fontStyle:"italic",
                                fontFamily:"arial"
                            }}
                        >
                            {this.props.description}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default FlatListItem;
