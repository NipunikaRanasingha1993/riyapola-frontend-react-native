import { View ,Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

export default function Login({navigation}){

    const clickLogin = () =>{
        navigation.navigate('DrawerNav')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Customer Login</Text>
            <TextInput style={styles.input} placeholder="Email"/>
            <TextInput style={styles.input} placeholder="Password"/>
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