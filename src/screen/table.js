
import React from 'react';

import { SafeAreaView, Text, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper'
import Axios from 'axios'

const TableScreen = () => {
  const [table, setTable] = React.useState([])
  React.useEffect(() => {
    Axios.get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')
      .then(res => (setTable(res.data)))
      .catch(err => console.log(err))
  }, [])
  return (
    <SafeAreaView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Region</DataTable.Title>
          <DataTable.Title numeric>Confirmed</DataTable.Title>
          <DataTable.Title numeric>Recovered</DataTable.Title>
          <DataTable.Title numeric>Death</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={table.Countries}
          renderItem={({ item, index }) => {
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.Country}</DataTable.Cell>
              <DataTable.Cell numeric>{item.TotalConfirmed}</DataTable.Cell>
              <DataTable.Cell numeric>{item.TotalRecovered}</DataTable.Cell>
              <DataTable.Cell numeric>{item.TotalDeaths}</DataTable.Cell>
            </DataTable.Row>

          }}
          keyExtractor={(item, index) => index.toString()}
        />

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
    </SafeAreaView>
  );
};


export default TableScreen;
