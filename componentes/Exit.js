import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Exit({route}){

    useEffect(()=>{route.params.funcLogarB(false)},[]);

}