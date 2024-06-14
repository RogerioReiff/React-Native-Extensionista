import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Linking } from 'react-native';

export default function AdmLandingPage({ navigation }) {
  const [selectedEstado, setSelectedEstado] = useState('');

  const handleEstadoSelection = (Estado) => {
    setSelectedEstado(Estado);
    navigation.navigate('ListaCarros', { selectedEstado: Estado });
  };

  const whtApp = ()=>{
    var mess = 'Olá! Gostaria de pedir ajuda com o aplicativo!'
    Linking.canOpenURL("whatsapp://send?text=oi").then(supported =>{
      if (supported){
        return Linking.openURL(`whatsapp://send?phone=5521964976582&text=${mess}`);
      }
      else{
        return Linking.openURL(`https://api.whatsapp.com/send?phone=5521964976582&text=${mess}`)
      }
    })
  }

  const checkIfSure = ()=>{
    Alert.alert('ATENÇÃO!', 'Se você pressionar OK o app vai enviar uma mensagem via WhatsApp para os desenvolvedores. Deseja continuar?', [
      {text: 'OK', onPress: () => whtApp()},
      {text: 'FECHAR', onPress: () => console.log('alert closed')}
    ])
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setSelectedEstado('');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carros na Oficina</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleEstadoSelection('Prontos')}>
        <Text>Prontos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleEstadoSelection('Em Conserto')}>
        <Text>Em Conserto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleEstadoSelection('Em Orçamento')}>
        <Text>Em Orçamento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleEstadoSelection('Esperando Orçamento')}>
        <Text>Esperando Orçamento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => checkIfSure()}>
        <Text>Ajuda</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: 200,
    alignItems: 'center',
  },
});












{/*import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function AdmLandingPage({route}){

    return(

        <View>
            <Text>Carros na Oficina</Text>
            <Text>Coloque uma flatlist com a placa do carro - modelo - nome cliente - e estado, se está pronto ou não</Text>
        </View>
    );

}*/}