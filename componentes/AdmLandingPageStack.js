import { createStackNavigator } from '@react-navigation/stack';
import AdmLandingPage from './AdmLandingPage';
import ListaCarros from './ListaCarros';
import InfoCars from './InfoCars';
import Historico from './Historico';

const Stack = createStackNavigator(); 


export default function AdmLandingPageStack({navigation, route}){

    return(
       <Stack.Navigator initialRouteName="AdmLandingPageS">
        <Stack.Screen name="AdmLandingPageS" component={AdmLandingPage} options={{headerShown: false}}/>
        <Stack.Screen name="ListaCarros" component={ListaCarros} options={{title: 'Lista de Carros', headerShown: false}}/>
        <Stack.Screen name="InfoCars" component={InfoCars} options={{title: 'Carro Detalhes', headerShown: false}}/>
        <Stack.Screen name="Historico" component={Historico} options={{title: 'Histórico', headerShown: false}}/>
      </Stack.Navigator>
    );
}