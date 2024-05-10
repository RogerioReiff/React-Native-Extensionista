import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation, route}){

    //TODO: O iCPF e iPswd retorno primeiro o valor nulo e depois o valor digitado pelo usuario, para CONSERTAR?

    const [iCPF, setInputCPF] = useState('');
    const [iPswd, setInputPswd] = useState('');
    const [valueCPF, setValueCPF] = useState('');
    const [valuePswd, setValuePswd] = useState('');

    const setData = async () =>{
        try{
            var user = {CPF: iCPF, PASSWORD: iPswd, key: 0}
            await AsyncStorage.setItem('UsersData', JSON.stringify(user));
        }
        catch(error){
            console.log(error)
        }
    } 

    const getData = async () =>{
        try{

           await AsyncStorage.getItem('UsersData').then(JSON.parse).then(value =>{setValueCPF(value.CPF)});
           await AsyncStorage.getItem('UsersData').then(JSON.parse).then(value =>{setValuePswd(value.PASSWORD)});

           if(valueCPF === iCPF && valuePswd === iPswd && iCPF.length !== 0){
            route.params.funcLogar(true)
           }else{
            alert("Login invalido")
            }
        }
        catch(error){console.log(error)}
    }


    return(
        <View style={styles.Container}>
            <Image style={styles.Logo}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>

            <Text style={styles.textTitle}>Login</Text>

            <Text style={styles.textBox}>CPF</Text>
            <TextInput style={styles.inputBox} placeholder="00000000000" onChangeText={(value) => {setInputCPF(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Text style={styles.textBox}>Senha</Text>
            <TextInput style={styles.inputBox} placeholder="Senha" /* secureTextEntry */ onChangeText={(value)=>{setInputPswd(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Button title='Logar' style={{paddingTop: 10, margin: 15, alignItems: 'center', height:40}} onPress={getData}/>

            <TouchableOpacity style={{paddingTop: 10, textAlign: 'center'}} onPress={setData}>
                <Text>Esqueceu a senha?</Text>
            </TouchableOpacity>

        </View>
    );
}


//TODO: MELHORAR A UI?
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignContent: 'center'
    },
    Logo:{
        width: 50,
        height: 50,
        paddingBottom: 10,
    },
    textTitle:{
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    textBox:{
        paddingBottom: 10,
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    }, 
    inputBox:{
        paddingLeft: 10,
        paddingBottom: 20,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 6,

    },

})