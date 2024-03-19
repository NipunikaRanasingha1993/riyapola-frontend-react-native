import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomePage({navigation}){

    const clickGoLogin = () =>{
        navigation.navigate('Login')
    }

    const clickGoReg = () =>{
        navigation.navigate('Register')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>WelCome to Riyapola Car</Text>
            <Text style={styles.subTitle}>"Get ready to go your jurney with different kind of vehicles..."</Text>
            <TouchableOpacity onPress={clickGoLogin} style={styles.btn1}>
                <Text style={styles.btnText}>Go Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clickGoReg} style={styles.btn2}>
                <Text style={styles.btnText}>Go Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'black'
    },

    title : {
        fontSize:25,
        color:'skyblue',
        marginTop:30,
    },

    subTitle : {
        fontSize:17,
        color:'skyblue',
        marginTop:20,
        marginBottom:20
    },

    btn1 : {
        backgroundColor:'green',
        width:'70%',
        marginTop:10,
        padding:10,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },

    btn2 : {
        backgroundColor:'purple',
        width:'70%',
        marginTop:10,
        padding:10,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },

    btnText : {
        color:'white',
        justifyContent:'center'
    }
})