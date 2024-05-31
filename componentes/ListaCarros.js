import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function ListaCarros({ route, navigation }) {
  const { selectedEstado } = route.params;
  const [carros, setCarros] = useState([
    { id: 1, Marca: 'Toyota', Modelo: 'Corolla', Ano: 2020 },
    { id: 2, Marca: 'Honda', Modelo: 'Civic', Ano: 2019 },
    { id: 3, Marca: 'Ford', Modelo: 'Focus', Ano: 2018 },
    { id: 4, Marca: 'Chevrolet', Modelo: 'Cruze', Ano: 2021 },
  ]);

  const navigateToInfoCar = (carro) => {
    navigation.navigate('InfoCar', { carro });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carros na Oficina - {selectedEstado}</Text>
      <FlatList
        data={carros}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToInfoCar(item)} style={styles.itemContainer}>
            <Text>Marca: {item.Marca}</Text>
            <Text>Modelo: {item.Modelo}</Text>
            <Text>Ano: {item.Ano}</Text>
            {/* Adicione mais informações conforme necessário */}
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});








{/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ListaCarros({ route }) {
  const { selectedEstado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carros na Oficina - {selectedEstado}</Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});*/}