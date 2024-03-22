import { createDrawerNavigator } from '@react-navigation/drawer';
import Reservations from '../../pages/Reservations';
import OldReservations from '../../pages/OldReservations';


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Reservations" component={Reservations} />
      <Drawer.Screen name="OldReservations" component={OldReservations} />
    </Drawer.Navigator>
  )
}