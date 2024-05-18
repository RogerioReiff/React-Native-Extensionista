import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function AddCar(){

    const fs = require('fs');

    const add = ()=>{
        let prod1 = null;
            try
            {
            let prodStr = fs.readFileSync('prod1.json');
            prod1 = JSON.parse(prodStr);
            }
            catch(err)
            {
                prod1 = {codigo: 1, nome: 'Teclado', quantidade: 50};
                let prodStr = JSON.stringify(prod1);
                fs.writeFileSync('prod1.json',prodStr);
            }
        }


    return(

        <View>
            <Text>Adicionar Carros</Text>

            <Text>CPF Cliente</Text>
            
            <Text>Modelo</Text>

            <Text>Placa do Carro</Text>

            <Text>Estado</Text>

            <Button title='adicionar' onPress={add}/>
        </View>
    );

}