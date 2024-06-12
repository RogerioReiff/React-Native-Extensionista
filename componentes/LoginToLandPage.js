import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import AdmLandingPage from './AdmLandingPage';
import CadFunc from './CadFunc';
import AddCar from './AddCar';
import Exit from './Exit';
import ListaCarros from './ListaCarros';
import InfoCars from './InfoCars';
import Historico from './Historico';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator(); 


function AdmLandingPageStack() {
    return (
      <Stack.Navigator initialRouteName="AdmLandingPageS">
        <Stack.Screen name="AdmLandingPageS" component={AdmLandingPage} options={{headerShown: false}}/>
        <Stack.Screen name="ListaCarros" component={ListaCarros} options={{title: 'Lista de Carros'}}/>
        <Stack.Screen name="InfoCars" component={InfoCars} options={{title: 'Carro Detalhes'}}/>
        <Stack.Screen name="Historico" component={Historico} options={{title: 'Histórico'}}/>
      </Stack.Navigator>
    );
  }

export default function LoginToLandPage({navigation, route}){

    return(
            <Drawer.Navigator>
                <Drawer.Screen name="AdmLandingPage" component={AdmLandingPageStack} initialParams={{funcLogarB : route.params.funcLogar}} options={{title: 'Menu Principal'}}/>
                <Drawer.Screen name="AddCar" component={AddCar} options={{title: 'Adicionar Carros'}}/>
                <Drawer.Screen name="CadFunc" component={CadFunc} options={{title: 'Cadastrar Funcionário'}}/>
                <Drawer.Screen name="Sair" component={Exit} initialParams={{funcLogarB : route.params.funcLogar}}/>
            </Drawer.Navigator>
    );
}