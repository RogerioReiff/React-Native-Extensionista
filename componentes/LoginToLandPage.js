import { createDrawerNavigator } from '@react-navigation/drawer';
import CadFunc from './CadFunc';
import AddCar from './AddCar';
import Exit from './Exit';
import AdmLandingPageStack from './AdmLandingPageStack';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

export default function LoginToLandPage({navigation, route}){

    const [notHidden, setNotHidden] = useState(true);

    const checkToF = async ()=>{
        try{
            const checkA = await AsyncStorage.getItem('CheckAdmin').then(JSON.parse);

            if(checkA === '1'){
                setNotHidden(true);
            }
            else{
                setNotHidden(false);
            }

        }catch(error)
        {
            console.log(error)
        }
        
    }

    useEffect(()=>{checkToF()}, []);

    return(
        notHidden?(
            <Drawer.Navigator>
                <Drawer.Screen name="AdmLandingPage" component={AdmLandingPageStack} initialParams={{funcLogarB : route.params.funcLogar}} options={{title: 'Menu Principal'}}/>
                <Drawer.Screen name="AddCar" component={AddCar} options={{title: 'Adicionar Carros'}}/>
                <Drawer.Screen name="CadFunc" component={CadFunc} options={{title: 'Cadastrar Funcionário'}}/>
                <Drawer.Screen name="Sair" component={Exit} initialParams={{funcLogarB : route.params.funcLogar}}/>
            </Drawer.Navigator>
            ):(
            <Drawer.Navigator>
                <Drawer.Screen name="AdmLandingPage" component={AdmLandingPageStack} initialParams={{funcLogarB : route.params.funcLogar}} options={{title: 'Menu Principal'}}/>
                <Drawer.Screen name="AddCar" component={AddCar} options={{title: 'Adicionar Carros'}}/>
                <Drawer.Screen name="Sair" component={Exit} initialParams={{funcLogarB : route.params.funcLogar}}/>
            </Drawer.Navigator>
            )
    );
}