import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Axios from 'axios'
import { StackActions } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const HomeScreen = () => {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    Axios.get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')
      .then(res => (setData(res.data)))
      .catch(err => console.log(err))
  }, [])

  return (
    <ScrollView>
      <Text>This is Home</Text>
      <Text>Total: </Text>
      <Text>Recovered : </Text>
      <Text>Deaths : </Text>
    </ScrollView>
  );
};


export default HomeScreen;
