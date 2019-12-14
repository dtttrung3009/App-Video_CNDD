import React, {Component} from 'react';

import {Text, View, FlatList, Image} from 'react-native';
import FlatListItem from './FlatListItem';
import {SearchBar} from 'react-native-elements';

const backgroundColor = '#964f8e';
export default class VideoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterVideo: '',
            list:this.props.videos
        };
    }


    componentDidMount() {
        this.props.onFetchMovies();
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let tabBarLabel = 'Video';
        let tabBarIcon = () => (
            <Image
                source={require('../icons/cloud-icon.png')}
                style={{width: 26, height: 26, tintColor: backgroundColor}}/>
        );
        return {tabBarLabel, tabBarIcon};
    };
    onChange = filterVideo => {
        this.setState({filterVideo});
        console.log(filterVideo);
    };

    render() {
        var {filterVideo,list} = this.state;
        if(filterVideo){
            list=list.filter((i)=>{
                return i.description.toLowerCase().indexOf(filterVideo.toLowerCase())!==-1;
            })
        }
        return (
            <View style={{flex: 1}}>
                <SearchBar
                    placeholder="Type Here..."
                    value={filterVideo}
                    onChangeText={this.onChange}
                />
                <FlatList
                    data={list}
                    keyExtractor={(item) => item.id}
                    renderItem={({item, index}) =>
                        <FlatListItem {...item} itemIndex={index}/>
                    }
                />
            </View>
        );
    }
}
