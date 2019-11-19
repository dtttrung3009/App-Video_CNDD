import React, {Component} from 'react';

import {Text, View, FlatList} from 'react-native';
import FlatListItem from './FlatListItem';
export default class VideoComponent extends Component {
    componentDidMount() {
        console.log('Ham did mount da chay');
        this.props.onFetchMovies();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'mediumseagreen',
                    }}>App Video </Text>
                </View>

                <FlatList

                    data={this.props.videos}
                    keyExtractor={(item) => item.id}
                    renderItem={({item, index}) =>
                       <FlatListItem {...item} itemIndex={index}/>
                    }
                />
            </View>
        );
    }
}
