import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import DrawerNavigation from '../navigation/DrawerNavigation'
import Login from '../screen/login'

import { useDispatch, useSelector } from 'react-redux'

import { keepLogin } from '../actions'


const MainNavigation = () => {
    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    })

    const dispatch = useDispatch()

    React.useEffect(() => {
        console.log('use effect trigered')
        dispatch(keepLogin())
    }, [])
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator headerMode={false}>
            {username
                ? (
                    <>
                        <Stack.Screen name="drawer-nav" component={DrawerNavigation} />
                    </>
                )
                : (
                    <>
                        <Stack.Screen name="login" component={Login} />
                    </>
                )}

        </Stack.Navigator>
    );
};


export default MainNavigation;
