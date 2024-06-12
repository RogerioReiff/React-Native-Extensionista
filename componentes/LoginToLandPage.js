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
      <Stack.Navigator initialRouteName="AdmLandingPage">
        <Stack.Screen name="AdmLandingPage" component={AdmLandingPage} />
        <Stack.Screen name="ListaCarros" component={ListaCarros} />
        <Stack.Screen name="InfoCars" component={InfoCars} />
        <Stack.Screen name="Historico" component={Historico} />
      </Stack.Navigator>
    );
  }

export default function LoginToLandPage({navigation, route}){

    return(
            <Drawer.Navigator>
                <Drawer.Screen name="AdmLandingPage" component={AdmLandingPageStack} initialParams={{funcLogarB : route.params.funcLogar}}/>
                <Drawer.Screen name="AddCar" component={AddCar}/>
                <Drawer.Screen name="CadFunc" component={CadFunc}/>
                <Drawer.Screen name="Sair" component={Exit} initialParams={{funcLogarB : route.params.funcLogar}}/>
            </Drawer.Navigator>
    );
}