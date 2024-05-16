import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';


export default function ListFunc(){

    const [func, setFunc] = useState([]);
    
    const getData = async () =>{
       try{
        const keys = await AsyncStorage.getAllKeys();
        const values = await AsyncStorage.multiGet(keys);
        setFunc(values);
        console.log(func);
       }
       catch(error)
       {
        alert(error);
       }
    }

    useEffect(()=>{getData();}, []);

    const item = ({item}) =>(
        <View>
            <Text>{item}</Text>
        </View>
    );

    return(
        <View>
            <FlatList data={func} 
            renderItem={item} />
        </View>
    );
}