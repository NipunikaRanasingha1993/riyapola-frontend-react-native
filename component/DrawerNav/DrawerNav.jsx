import { createDrawerNavigator } from '@react-navigation/drawer';
import Reservations from '../../pages/Reservations';
import OldReservations from '../../pages/OldReservations';
import CustomerAction from '../../pages/CustomerAction';
import Cars from '../../pages/Cars';


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Reservations" component={Reservations} />
      <Drawer.Screen name="Old Reservations" component={OldReservations} />
      <Drawer.Screen name="Customer Action" component={CustomerAction} />
      <Drawer.Screen name="Cars" component={Cars}/>
    </Drawer.Navigator>
  )
}