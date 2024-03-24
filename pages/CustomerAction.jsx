import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import instance from "../service/AxiosOrder/AxiosOrder";

export default function CustomerAction({navigation}){

    const logOutAct = async () =>{
        await AsyncStorage.removeItem('stmToken')
        navigation.navigate('HomePage')
    }

    const deleteAct = (id) =>{
        instance.delete('/customer/'+id)
      .then(function (response) {
        console.log(response);
        alert('delete Successful.....')
        // handle success
        // getData(setData);
      })
      
      .catch(function (error) {
        console.log(error);
        // handle error
        alert('please try again later.....')
      })
    
      }

    return(
        <View style={styles.container}>
        <View style={{flex:1}}>
            <TouchableOpacity style={styles.btn1} onPress={logOutAct}>
                <Text style={styles.btnText}>Log Out</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
            <TouchableOpacity style={styles.btn2} onPress={deleteAct}>
                <Text style={styles.btnText}>Delete Account</Text>
            </TouchableOpacity>

        </View>
        <View style={{flex:3}}>
            <TouchableOpacity style={styles.btn3}>
                <Text style={styles.btnText}>Update Details</Text>
            </TouchableOpacity>
        </View>
        </View>
       

    )
    
}

const styles = StyleSheet.create({

    container : {
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },

    btn1 : {
        marginTop:5,
        backgroundColor:'red',
        width:'50%',
        borderRadius:20,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
    },
    btn2 : {
        backgroundColor:'red',
        width:'50%',
        borderRadius:20,
        padding:10,
        justifyContent:'center',
        alignItems:'center',

    },

    btn3 : {
        backgroundColor:'green',
        width:'50%',
        borderRadius:20,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
    },

    btnText : {
        color:'white'
    }
})