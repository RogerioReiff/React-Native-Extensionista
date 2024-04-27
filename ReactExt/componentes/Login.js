import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';


export default function Login({navigation, route}){
    return(
        <View style={styles.Container}>
            <Image style={styles.Logo}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>

            <Text style={styles.textTitle}>Login</Text>

            <Text style={styles.textBox}>CPF</Text>
            <TextInput style={styles.inputBox} placeholder="00000000000"/>

            <Text style={styles.textBox}>Senha</Text>
            <TextInput style={styles.inputBox} placeholder="Senha"/>

            <Button title='Logar' style={{paddingTop: 10,}} onPress={()=>route.params.funcLogar(true)}/>
            <TouchableOpacity style={{paddingTop: 10, textAlign: 'center'}}>
                <Text>Esqueceu a senha?</Text>
            </TouchableOpacity>

        </View>
    );
}


//TODO: MELHORAR A UI?
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        flexDirection: 'column',
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