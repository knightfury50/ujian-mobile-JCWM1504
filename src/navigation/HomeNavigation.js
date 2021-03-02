import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screen/home'
import Table from '../screen/table'

const HomeNav = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} options={{
                headerShown: false
            }}/>
            <Tab.Screen name="table" component={Table} options={{
                headerShown: false
            }}/>
        </Tab.Navigator>
    );
};


export default HomeNav;
