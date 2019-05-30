import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import SettingsScreen from "../SettingsScreen";
import Profile from "../Profile";
import React from 'react';
import HomeRoutes from './HomeRoutes';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeRoutes,
        navigationOptions: {
          //  tabBarIcon: ({ tintColor }) => <CustomIcons size={THEME.ICON_SIZE} name={ICONS.HOME_TAB} style={{color: tintColor}} />
        }
    },



    Settings: SettingsScreen,
    Profile: Profile,
});

export default TabNavigator;