import React from 'react';
import { Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Routes from './components/Routes/Routes';




export default createAppContainer(
    createSwitchNavigator(
        {
            App: Routes
        },
        {
            initialRouteName: 'App'
        }
    )
);
