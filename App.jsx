import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import OldReservations from './pages/OldReservations';
import Register from './pages/Register';
import Reservations from './pages/Reservations';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './pages/HomePage';
import DrawerNav from './component/DrawerNav/DrawerNav';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {

  // const [login,setLogin] = useState(false);

  // useEffect( async ()=>{
  //   const key = await AsyncStorage.getItem('stmToken')
  //   console.log(key);
  //   if(key!==null){
  //     setLogin(true);
  //   }else{
  //     setLogin(false);
  //   }
  // },[]);

  return (
    
    // <View>
    //   {
    //     login ?
    //       <DrawerNav/>
    //        :

    //   <View>






        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Reservations" component={Reservations} />
      <Stack.Screen name="OldReservations" component={OldReservations} /> */}
          </Stack.Navigator>

        </NavigationContainer>

//       </View>

// }

//     </View>

  





  )
}