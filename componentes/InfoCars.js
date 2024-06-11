import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button, StyleSheet, Alert, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as FileSystem from 'expo-file-system';

const InfoCar = ({ route, navigation }) => {
  const { carro } = route.params;

  const [estado, setEstado] = useState(carro.estado);
  const [descricao, setDescricao] = useState(carro.descricao);

  const handleEstadoChange = (value) => {
    setEstado(value);
  };

  const handleDescricaoChange = (text) => {
    setDescricao(text);
  };

  const handleSubmit = async () => {
    // Obter a data e hora atual
    const dataHoraAtual = new Date().toLocaleString('pt-BR');
    // Atualiza o estado do carro com os novos valores
    const carroAtualizado = {
      ...carro,
      estado: estado,
      descricao: `${dataHoraAtual} -\n ${descricao}\n-----------------------------------------------------------------------\n\n ${carro.descricao}`
    };
    // Atualiza o arquivo carros.json
    let path = FileSystem.documentDirectory + 'carros.json';
    try {
      let jsonCarros = await FileSystem.readAsStringAsync(path);
      let carros = JSON.parse(jsonCarros);
      const index = carros.findIndex((c) => c.placa === carro.placa && c.cpf === carro.cpf);
      if (index !== -1) {
        carros[index] = carroAtualizado; // Atualiza o objeto no array com os novos valores
        await FileSystem.writeAsStringAsync(path, JSON.stringify(carros));
        // Exibe uma mensagem de sucesso ao usuário
        Alert.alert(
          'Sucesso',
          'O estado do carro foi atualizado com sucesso.',
          [
            { text: 'OK', onPress: () => navigation.navigate('AdmLandingPage') }
          ],
          { cancelable: false }
        );
      } else {
        console.log('Carro não encontrado no arquivo carros.json.');
      }
    } catch (error) {
      console.error('Erro ao atualizar o arquivo carros.json:', error);
    }
  };

  const handleOpenCamera = async () => {
    // Tente abrir o aplicativo de câmera do dispositivo
    const url = 'camera:';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      // Se não for possível abrir o aplicativo de câmera, exibe uma mensagem de erro ao usuário
      Alert.alert('Erro', 'Não foi possível abrir o aplicativo de câmera. Verifique se o aplicativo está instalado no dispositivo.');
    }
  };


  const handleDelete = async () => {
    // Exclui o carro do arquivo carros.json
    let path = FileSystem.documentDirectory + 'carros.json';
    try {
      let jsonCarros = await FileSystem.readAsStringAsync(path);
      let carros = JSON.parse(jsonCarros);
      const index = carros.findIndex((c) => c.placa === carro.placa && c.cpf === carro.cpf);
      if (index !== -1) {
        Alert.alert(
          'Confirmação',
          'Tem certeza que deseja excluir este carro?',
          [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Excluir', onPress: () => confirmDelete(carros, index) }
          ],
          { cancelable: false }
        );
      } else {
        console.log('Carro não encontrado no arquivo carros.json.');
      }
    } catch (error) {
      console.error('Erro ao excluir o carro do arquivo carros.json:', error);
    }
  };

  const confirmDelete = async (carros, index) => {
    // Exclui o carro do arquivo carros.json
    let path = FileSystem.documentDirectory + 'carros.json';
    try {
      carros.splice(index, 1);
      await FileSystem.writeAsStringAsync(path, JSON.stringify(carros));
      // Exibe uma mensagem de sucesso ao usuário
      Alert.alert(
        'Sucesso',
        'O carro foi excluído com sucesso.',
        [
          { text: 'OK', onPress: () => navigation.navigate('AdmLandingPage') }
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Erro ao excluir o carro do arquivo carros.json:', error);
    }
  };

  const handleHistoricoPress = () => {
    navigation.navigate('Historico', { carro: carro });
  };

  return (
    <ScrollView style={styles.container}>
      <Text>CPF do Cliente:</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={carro.cpf} // Exibir CPF do carro clicado
        editable={false}
      />
      <Text>Modelo do Carro:</Text>
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={carro.modelo} // Exibir modelo do carro clicado
        editable={false}
      />
      <Text>Placa do Carro:</Text>
      <TextInput
        style={styles.input}
        placeholder="Placa"
        value={carro.placa} // Exibir placa do carro clicado
        editable={false}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Histórico"
          onPress={() => handleHistoricoPress(carro)} // Passa o objeto carro como parâmetro
        />
        <Button
          title="Câmera"
          onPress={handleOpenCamera}
        />
      </View>
      <Text>Estado na oficina:</Text>
      <Picker
        selectedValue={estado}
        style={styles.picker}
        onValueChange={(itemValue) =>
          handleEstadoChange(itemValue)
        }>
        <Picker.Item label="Entregue" value="Entregue" />
        <Picker.Item label="Prontos" value="Prontos" />
        <Picker.Item label="Em Conserto" value="Em Conserto" />
        <Picker.Item label="Em Orçamento" value="Em Orçamento" />
        <Picker.Item label="Esperando Orçamento" value="Esperando Orçamento" />
      </Picker>
      <Text>Descrição do problema:</Text>
      <TextInput
        style={styles.inputdescricao}
        placeholder="Descrição"
        //value={descricao} // Exibir descrição do carro clicado
        onChangeText={handleDescricaoChange}
        editable={true}
        multiline
      />
      <Button
        title="Enviar"
        onPress={handleSubmit}
      />
      <Button
        title="Excluir"
        onPress={handleDelete}
        color="red"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    paddingHorizontal: 20,
  },
  input: {
    height: 25,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
    inputdescricao: {
    height: 140,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
  picker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default InfoCar;
