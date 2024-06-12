import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';

export default function Login({navigation, route}){


    const [iCPF, setInputCPF] = useState('');
    const [iPswd, setInputPswd] = useState('');

    const setFirstTime = async () =>{
        try{
            const dgt = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, 'Admin');
            var user = {NAME: 'Admin', PASSWORD: dgt}
            await AsyncStorage.setItem('Admin', JSON.stringify(user));
        }
        catch(error){
            console.log(error)
        }
    }

    const checkIfExists = async ()=>{
        try{
            const check = await AsyncStorage.getItem('Admin')
            if(check === null){
                throw error
            }
        }
        catch(error){
            setFirstTime();
        }
     }

     useEffect(()=>{
        checkIfExists()
    },[]);

    const getData = async () =>{
        try{

            const digest = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, iPswd);

            var valCPF;
            var valPswd;
           
            const value = await AsyncStorage.getItem(iCPF).then(JSON.parse);
            if(value !== null){
                valCPF = iCPF;
            }
            else{
                alert("Login Invalido")
            }

            valPswd = value.PASSWORD;

           if(valCPF === iCPF && valPswd === digest){
            route.params.funcLogar(true)
           }else{
            alert("Login invalido")
            }
        }
        catch(error){console.log(error)}
    }


    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard');
            }}>
            <View style={styles.Container}>
                <Image style={styles.Logo}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>

                <Text style={styles.textTitle}>Login</Text>

                <Text style={styles.textBox}>CPF</Text>
                <TextInput style={styles.inputBox} placeholder="000.000.000-00" onChangeText={(value) => {setInputCPF(value)}} autoCorrect={false} autoCapitalize='none'/>

                <Text style={styles.textBox}>Senha</Text>
                <TextInput style={styles.inputBox} placeholder="Senha" secureTextEntry onChangeText={(value)=>{setInputPswd(value)}} autoCorrect={false} autoCapitalize='none'/>

                <Button title='Logar' style={{paddingTop: 40, margin: 15, alignItems: 'center', height:40, marginTop: 30}} onPress={getData}/>

            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignContent: 'center',
        padding: 12,
    },
    Logo:{
        width: 70,
        height: 70,
        left: 150,
        paddingBottom: 10,
        justifycontent:'center',
    },
    textTitle:{
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 10,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    textBox:{
        paddingBottom: 5,
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    }, 
    inputBox:{
        paddingLeft: 10,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 6,
        height:40,
        marginBottom: 20,

    },
})