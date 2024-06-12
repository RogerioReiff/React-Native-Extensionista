import React from 'react';
import { StyleSheet, Text, ScrollView, TextInput } from 'react-native';

export default function Historico({ route }) {
  const { carro } = route.params;
  console.log('Objeto carro:', carro);

  return (
    <ScrollView>
      <MaterialIcons name='arrow-back' size={24} style={{...styles.close}} onPress={()=>{navigation.navigate("AdmLandingPageS")}}/>
      <Text>Descrição do problema:</Text>
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={carro.descricao}
        editable={false}
        multiline
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 500,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
  close: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 0,
    bottom: 63,
    right: 175,
}
});
