import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useEffect, useState } from "react";
import instance from "../service/AxiosOrder/AxiosOrder";


export default function Cars(){
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();

    }, []);

    const getData = () => {
        instance.get('/car/getAllCar')
            .then(function (response) {
                console.log("kkkkkk")
                console.log(response.data)
                const array = []
                response.data.forEach(val => {
                    array.push({
                        id:val.id,
                        model: val.model,
                        brand: val.brand,
                        transMode: val.transMode,
                        fuelType: val.fuelType,
                        engineCap: val.engineCap,
                        carName: val.carName
                    })
                })
                setData(array)

            })
            .catch(function (error) {
                console.log(error);
                setLoading(true);
            })
    }


    // const clickGoLogin = () => {
    //     navigation.navigate('Login')
    // }

    // const clickGoReg = () => {
    //     navigation.navigate('Register')
    // }

    const Card1 = ({id, model, brand, transMode, fuelType, engineCap, carName }) => (

        <Card style={{ margin: 10 }}>

            <Card.Content style={{ flex: 1 }}>
                <Text>{id}</Text>

                <Text variant="titleLarge">{brand}</Text>
                <Text variant="bodyMedium">{model}</Text>
                <Text variant="bodyMedium">{'TransMission Mode : ' + transMode + " | " + 'Fuel Type : ' + fuelType + " | " + 'Engine Capacity : ' + engineCap}</Text>
            </Card.Content>

            <Card.Cover source={{ uri: `http://192.168.8.107:8080/${carName}` }} />
            <Card.Actions>
                {/* <Button>Cancel</Button> */}
                {/* <Button style={styles.btn3}>Reservation</Button> */}
                <TouchableOpacity style={styles.btn3}>
                    <Text style={styles.btnText}>Reservation</Text>
                </TouchableOpacity>
            </Card.Actions>
        </Card>

    )



    return (
        <View style={styles.container}>

            <Text style={styles.title} variant="headlineLarge">WelCome To Riyapola</Text>
            <Text style={styles.subTitle} variant="headlineMedium">"Get ready to go your jurney with different kind of vehicles..."</Text>

            {/* <Text style={styles.title}>WelCome to Riyapola Car</Text>
            <Text style={styles.subTitle}>"Get ready to go your jurney with different kind of vehicles..."</Text> */}
            {/* <TouchableOpacity onPress={clickGoLogin} style={styles.btn1}>
                <Text style={styles.btnText}>Go Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clickGoReg} style={styles.btn2}>
                <Text style={styles.btnText}>Go Register</Text>
            </TouchableOpacity> */}

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Card1
                    id={item.id}
                        model={item.model}
                        brand={item.brand}
                        transMode={item.transMode}
                        fuelType={item.fuelType}
                        engineCap={item.engineCap}
                        carName={item.carName}
                    />
                )}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },

    title: {
        fontSize: 25,
        color: 'skyblue',
        marginTop: 20,
        display: 'flex'
    },

    subTitle: {
        fontSize: 17,
        color: 'skyblue',
        marginTop: 10,
        marginBottom: 10
    },

    btn1: {
        backgroundColor: 'green',
        width: '70%',
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btn2: {
        backgroundColor: 'purple',
        width: '70%',
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },

    btnText: {
        color: 'white',
        justifyContent: 'center'
    },

    btn3: {
        color: 'white',
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 20

    }
})
