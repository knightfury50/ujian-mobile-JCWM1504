import React from 'react';
import {
  View, Text, Button, TextInput
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { loginAction } from '../actions'

const LoginScreen = ({ navigation, route }) => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const { name } = useSelector((state) => {
    return {
      name: state.userReducer.username
    }
  })

  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(loginAction(username))
  }

  React.useEffect(() => {
    if (name) navigation.navigate('drawer-nav')
  }, [name])

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 15 }}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 15 }}
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;