import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {   
    
    state = {};
    
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => console.log(response));
    }
    
    render() {
        const { textStyle, viewStyle } = style;
        
        return (
            <View style={viewStyle}>
                <Text style={textStyle}> Album List! </Text>
            </View>
        );
    };
};

const style = {
    viewStyle: {
        padding: 30
    },
    textStyle: {
        textAlign: 'center'
    }
    
};

export default AlbumList;