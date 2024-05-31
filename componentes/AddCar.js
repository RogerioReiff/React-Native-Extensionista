import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as FileSystem from 'expo-file-system';
import {Picker} from '@react-native-picker/picker';

//POSSIVELMENTE MUDAR O ESTADO PARA UMA ESCOLHA EM VEZ DE TEXT INPUT
//O CÓDIGO SÓ RETORNA O ÚLTIMO CARRO ADICIONADO, NÃO SEI SE ELE SOBESCREVE O OUTRO OU SE SÓ RETORNA MESMO

export default function AddCar(){

    let path = FileSystem.documentDirectory + 'carros.json';
    let car1 = null;

    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [modelo, setModelo] = useState('');
    const [placa, setPlaca] = useState('');
    const [estado, setEstado] = useState('');
    const [descricao, setDescricao] = useState('');

    const add = async () => {
        try {
            let carros = [];
            const carStr = await FileSystem.readAsStringAsync(path);
            if (carStr) {
                carros = JSON.parse(carStr);
            }
    
            // Criar o objeto do novo carro
            const novoCarro = {
                codigo: Math.random(),
                nome: nome,
                cpf: CPF,
                modelo: modelo,
                placa: placa,
                estado: estado,
                descricao: descricao
            };
    
            // Verificar se o CPF já existe
            const cpfExistente = carros.some(carro => carro.cpf === novoCarro.cpf && carro.placa === novoCarro.placa );
            if (cpfExistente) {
                console.log("Já existe um carro com esse CPF.");
                return; // Sai da função se o CPF já existir
            }
    
            // Adicionar o novo carro à lista existente
            carros.push(novoCarro);
    
            // Escrever a lista atualizada de volta ao arquivo
            await FileSystem.writeAsStringAsync(path, JSON.stringify(carros), { encoding: FileSystem.EncodingType.UTF8 });
        } catch (err) {
            console.log(err);
        }
    };

    const ler = async()=>{
        try
        {

            console.log(path)

            let carStr = await FileSystem.readAsStringAsync(path);

            car1 = JSON.parse(carStr);

            console.log(car1)
        }
        catch(err)
        {
            console.log(err)
        }
    } 

    return(

        <View style={style.form}> 
            <Text style={style.titulo}>Adicionar Carros</Text>

            <Text>Nome Cliente</Text>
            <TextInput placeholder="Nome do Cliente" style={style.input} onChangeText={(value) => {setNome(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Text>CPF Cliente</Text>
            <TextInput placeholder="000.000.000-00" style={style.input} onChangeText={(value) => {setCPF(value)}} autoCorrect={false} autoCapitalize='none'/>
            
            <Text>Modelo</Text>
            <TextInput placeholder="Fiat" style={style.input} onChangeText={(value) => {setModelo(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Text>Placa do Carro</Text>
            <TextInput placeholder="12-ABC-34" style={style.input} onChangeText={(value) => {setPlaca(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Text>Estado</Text>
            {/*<TextInput placeholder="Em manutenção" onChangeText={(value) => {setEstado(value)}} autoCorrect={false} autoCapitalize='none'/>*/}
            <Picker
                selectedValue={estado}
                style={style.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setEstado(itemValue)
                }>
                <Picker.Item label="Prontos" value="Prontos" />
                <Picker.Item label="Em Conserto" value="Em Conserto" />
                <Picker.Item label="Em Orçamento" value="Em Orçamento" />
                <Picker.Item label="Esperando Orçamento" value="Esperando Orçamento" />
            </Picker>

            <Text>Descrição</Text>
            <TextInput placeholder="Descrição das alterações" style={style.descricao} onChangeText={(value) => {setDescricao(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Button title='adicionar' onPress={add}/>
            <Button title='ler' onPress={ler}/>
        </View>
    );

}

const style = StyleSheet.create({

    form:{
      padding: 12
    },

    titulo:{
      fontSize: 25,
      fontWeight: "bold",
      textAlign: 'center'
    },    

    descricao:{
      height:200,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
      textAlignVertical: 'top'
    },    

    input:{
      height:20,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
    },
    picker: {
        height: 10, // Altura ajustada para 40 (altere conforme necessário)
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
    }



})












{/*import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as FileSystem from 'expo-file-system';

//POSSIVELMENTE MUDAR O ESTADO PARA UMA ESCOLHA EM VEZ DE TEXT INPUT
//O CÓDIGO SÓ RETORNA O ÚLTIMO CARRO ADICIONADO, NÃO SEI SE ELE SOBESCREVE O OUTRO OU SE SÓ RETORNA MESMO

export default function AddCar(){

    let path = FileSystem.documentDirectory + 'carros.json';
    let car1 = null;

    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [modelo, setModelo] = useState('');
    const [placa, setPlaca] = useState('');
    const [estado, setEstado] = useState('');
    const [descricao, setDescricao] = useState('');

    const add = async()=>{
        try
        {
            car1 = {codigo: Math.random(), nome: nome, cpf: CPF, modelo: modelo, placa: placa, estado: estado, descricao: descricao};

            let carStr = JSON.stringify(car1);

            await FileSystem.writeAsStringAsync(path, carStr, { encoding: FileSystem.EncodingType.UTF8 });
        }
        catch(err)
        {
            console.log(err)
        }
    } 

    const ler = async()=>{
        try
        {

            console.log(path)

            let carStr = await FileSystem.readAsStringAsync(path);

            car1 = JSON.parse(carStr);

            console.log(car1)
        }
        catch(err)
        {
            console.log(err)
        }
    } 

    return(

        <View style={style.form}> 
            <Text style={style.titulo}>Adicionar Carros</Text>

            <Text>Nome Cliente</Text>
            <TextInput placeholder="Nome do Cliente" style={style.input} onChangeText={(value) => {setNome(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Text>CPF Cliente</Text>
            <TextInput placeholder="000.000.000-00" style={style.input} onChangeText={(value) => {setCPF(value)}} autoCorrect={false} autoCapitalize='none'/>
            
            <Text>Modelo</Text>
            <TextInput placeholder="Fiat" style={style.input} onChangeText={(value) => {setModelo(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Text>Placa do Carro</Text>
            <TextInput placeholder="12-ABC-34" style={style.input} onChangeText={(value) => {setPlaca(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Text>Estado</Text>
            <TextInput placeholder="Em manutenção" onChangeText={(value) => {setEstado(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Text>Descrição</Text>
            <TextInput placeholder="Descrição das alterações" style={style.descricao} onChangeText={(value) => {setDescricao(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Button title='adicionar' onPress={add}/>
            <Button title='ler' onPress={ler}/>
        </View>
    );

}

const style = StyleSheet.create({

    form:{
      padding: 12
    },

    titulo:{
      fontSize: 25,
      fontWeight: "bold",
      textAlign: 'center'
    },    

    descricao:{
      height:250,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
      textAlignVertical: 'top'
    },    

    input:{
      height:20,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
    }



})

*/}