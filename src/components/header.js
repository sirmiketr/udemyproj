// IMPORT LIBRARIES FOR COMPONENT

import React from 'react';
import { Text, View } from 'react-native';

// MAKE COMP

const Header = (props) => {
    
    const { textStyle, viewStyle } = styles;
    
    return (
            <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
        </View>    
    );
};

const styles = {
    viewStyle: {
      backgroundColor: '#f8f8f8',
        padding: 35,
        justifyContent: 'center',
        alignItems:'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
        
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
}

//MAKE COMP AVAILABLE TO ALL

export default Header;