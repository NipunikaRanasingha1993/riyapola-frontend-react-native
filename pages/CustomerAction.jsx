import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

export default function CustomerAction({navigation}){

    const logOutAct = async () =>{
        await AsyncStorage.removeItem('stmToken')
        navigation.navigate('HomePage')
    }

    return(
        <View>
            <TouchableOpacity onPress={logOutAct} style={{backgroundColor:'red'}}>
                <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
       

    )
    
}