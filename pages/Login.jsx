import { View ,Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import instance from "../service/AxiosOrder/AxiosOrder";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({navigation}){

    const [cusEmail,setCusEmail] = useState('nipu@gmail.com');
    const[cusPassword,setCusPassword] = useState('12345');

    const clickLogin = async () =>{
        const response = await instance.post('/customer/login', {
            email: cusEmail,
            password: cusPassword,
          })
          const data = response.data;
          await AsyncStorage.setItem('stmToken',data.token)
          const token = await AsyncStorage.getItem('stmToken')
          console.log(token);
        navigation.navigate('DrawerNav')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Customer Login</Text>
            <TextInput style={styles.input} placeholder="Email" onChangeText={(val)=>setCusEmail(val)}/>
            <TextInput style={styles.input} placeholder="Password" onChangeText={(val)=>setCusPassword(val)}/>
            <TouchableOpacity onPress={clickLogin} style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    title : {
        fontSize:25,
        color:'blue',
        fontWeight:"500",
        marginBottom:20

    },

    input : {
        borderWidth:1,
        borderRadius:20,
        width:'70%',
        marginTop:10,
        fontSize:15
    
    },

    btn : {
        backgroundColor:'green',
        padding:10,
        borderRadius:20,
        width:'70%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    
     },

     btnText : {
        color:'white',
        fontSize:15
     }
})