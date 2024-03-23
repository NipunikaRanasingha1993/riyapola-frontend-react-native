import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import instance from "../service/AxiosOrder/AxiosOrder";
import * as React from 'react';


export default function Register({ navigation }) {


    const [cusName, setCusName] = useState('');
    const [cusContact, setCusContact] = useState('');
    const [cusEmail, setCusEmail] = useState('');
    const [cusPassword, setCusPassword] = useState('');

    const clickReg = () => {
        instance.post('/customer/register', {
            name: cusName,
            contact: cusContact,
            email: cusEmail,
            password: cusPassword
        })
            .then(function (response) {
                console.log(response);
                navigation.navigate('Login');
                // alert('You are now a customer....')
                
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Customer Registration</Text>

            <TextInput style={styles.input} placeholder="Enter Your Name" onChangeText={(val) => setCusName(val)} />
            <TextInput style={styles.input} placeholder="Enter Your Contact" onChangeText={(val) => setCusContact(val)} />
            <TextInput style={styles.input} placeholder="Enter Your Email" onChangeText={(val) => setCusEmail(val)} />
            <TextInput style={styles.input} placeholder="Enter Your Password" onChangeText={(val) => setCusPassword(val)} />
            <TouchableOpacity onPress={clickReg} style={styles.btn}>
                <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: 'blue',
        fontSize: 25,
        fontWeight: "500",
        marginBottom: 20,
    },

    input: {
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
        fontSize: 15,
        width: '90%'

    },

    btn: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 20,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10

    },

    btnText: {
        color: 'white',
        fontSize: 15
    },


})