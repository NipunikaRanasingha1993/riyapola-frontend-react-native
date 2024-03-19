import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import OldReservations from './pages/OldReservations';
import Register from './pages/Register';
import Reservations from './pages/Reservations';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './pages/HomePage';
import DrawerNav from './component/DrawerNav/DrawerNav';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
      <Stack.Screen name="Reservations" component={Reservations} />
      <Stack.Screen name="OldReservations" component={OldReservations} />
    </Stack.Navigator>

    </NavigationContainer>

      
      

   
    
   
  )
}