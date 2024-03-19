import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register({navigation}){

    const clickReg = () =>{
        navigation.navigate('Login')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Customer Registration</Text>

            <TextInput style={styles.input} placeholder="Enter Your Name"/>
            <TextInput style={styles.input} placeholder="Enter Your Contact"/>
            <TextInput style={styles.input} placeholder="Enter Your Email"/>
            <TextInput style={styles.input} placeholder="Enter Your Password"/>
            <TouchableOpacity onPress={clickReg} style={styles.btn}>
                <Text style={styles.btnText}>Register</Text>
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
        color:'blue',
        fontSize:25,
        fontWeight:"500",
        marginBottom:20,
    },

    input : {
        borderWidth:1,
        borderRadius:20,
        marginBottom:10,
        fontSize:15,
        width:'70%'
    
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
    },


})