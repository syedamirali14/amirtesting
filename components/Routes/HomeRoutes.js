import React from 'react';
import {createStackNavigator} from "react-navigation";
import { Text, View } from 'react-native';
import Users from "../Users";
import HomeScreen from '../Home';

const HomeRoutes = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            // navigationOptions: {
            //    header: ({navigation}) => (
            //        <Header navigationProps={navigation} title="User Profile"/>
            //     )
            // }
        },

        Users: {
            screen: Users,
            // navigationOptions: {
            //    header: ({navigation}) => (
            //        <Header navigationProps={navigation} title="User Profile"/>
            //     )
            // }
        }
    }
);

export default HomeRoutes;
