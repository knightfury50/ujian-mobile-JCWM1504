import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../actions'



const Acc = ({navigation, route}) => {

  const dispatch = useDispatch()

  const handlelogout = () => {
    dispatch(logout()),
    navigation.navigate('login')
  }
  return (
    <View>
      <Button title="logout" onPress={handlelogout}/>
    </View>
  );
};


export default Acc;
