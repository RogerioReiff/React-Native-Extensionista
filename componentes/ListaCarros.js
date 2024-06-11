import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function ListaCarros({ route, navigation }) {
  const { selectedEstado } = route.params;
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    const fetchCarros = async () => {
      try {
        let path = FileSystem.documentDirectory + 'carros.json';
        const carrosData = await FileSystem.readAsStringAsync(path);
        console.log('Dados do arquivo JSON:', carrosData); // Exibir dados do arquivo JSON no console
        const parsedCarrosData = JSON.parse(carrosData);
        const filteredCarros = parsedCarrosData.filter(item => item.estado === selectedEstado);
        setCarros(filteredCarros);
      } catch (error) {
        console.error('Erro ao ler carros.json:', error);
      }
    };

    fetchCarros();
  }, [selectedEstado]);

  const navigateToInfoCar = (carro) => {
    navigation.navigate('InfoCars', { carro });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carros na Oficina - {selectedEstado}</Text>
      <FlatList
        data={carros}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToInfoCar(item)} style={styles.itemContainer}>
            <Text>Marca: {item.nome} - {item.placa} - {item.modelo}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()} // Use index como chave
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
    Width:50,
  },
});