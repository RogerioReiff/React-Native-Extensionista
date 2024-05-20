import { createDrawerNavigator } from '@react-navigation/drawer';
import AdmLandingPage from './AdmLandingPage';
import CadFunc from './CadFunc';
import AddCar from './AddCar';
import SearchCar from './SearchCars'
import Exit from './Exit';

const Drawer = createDrawerNavigator();


export default function LoginToLandPage({navigation, route}){

    return(
            <Drawer.Navigator>
                <Drawer.Screen name="AdmLandingPage" component={AdmLandingPage} initialParams={{funcLogarB : route.params.funcLogar}}/>
                <Drawer.Screen name="AddCar" component={AddCar}/>
                <Drawer.Screen name="SearchCar" component={SearchCar}/>
                <Drawer.Screen name="Sair" component={Exit} initialParams={{funcLogarB : route.params.funcLogar}}/>
            </Drawer.Navigator>
        
    );
}