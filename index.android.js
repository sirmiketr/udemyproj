//IMPORT A LIBRARY TO HELP CREATE A COMPONENT

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// CREATE A COMPONENT

const App = () => (
    <View>
        <Header headerText={'Header'} />
        <AlbumList />
    </View>
);

// RENDER IT

AppRegistry.registerComponent('Udemy2', () => App);