import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer'

import Home_Navigation from '../navigation/HomeNavigation'
import acc from '../screen/acc'

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="feed" component={Home_Navigation}/>
            <Drawer.Screen name="acc" component={acc}/>
        </Drawer.Navigator>
    );
};


export default DrawerNavigation;
