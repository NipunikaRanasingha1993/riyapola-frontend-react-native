import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useEffect, useState } from "react";
import instance from "../service/AxiosOrder/AxiosOrder";



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


export default function HomePage({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();

    }, []);

    const getData = () => {
        instance.get('/car/getAllCar')
            .then(function (response) {
                console.log(response.data)
                const array = []
                response.data.forEach(val => {
                    array.push({
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


    const clickGoLogin = () => {
        navigation.navigate('Login')
    }

    const clickGoReg = () => {
        navigation.navigate('Register')
    }

    const Card1 = ({ model, brand, transMode, fuelType, engineCap, carName }) => (

        <Card style={{ margin: 10 }}>

            <Card.Content style={{ flex: 1 }}>

                <Text variant="titleLarge">{brand}</Text>
                <Text variant="bodyMedium">{model}</Text>
                <Text variant="bodyMedium">{transMode + "." + fuelType + "." + engineCap}</Text>
            </Card.Content>

            <Card.Cover source={{ uri: carName }} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>

    )



    return (
        <View style={styles.container}>

            <Text style={styles.title}>WelCome to Riyapola Car</Text>
            <Text style={styles.subTitle}>"Get ready to go your jurney with different kind of vehicles..."</Text>
            <TouchableOpacity onPress={clickGoLogin} style={styles.btn1}>
                <Text style={styles.btnText}>Go Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clickGoReg} style={styles.btn2}>
                <Text style={styles.btnText}>Go Register</Text>
            </TouchableOpacity>

            <FlatList
                data={data}
                renderItem={({ item }) =>(
                    <Card1
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
        justifyContent: 'flex-start',
        // alignItems:'center',
        backgroundColor: 'black'
    },

    title: {
        fontSize: 25,
        color: 'skyblue',
        marginTop: 30,
    },

    subTitle: {
        fontSize: 17,
        color: 'skyblue',
        marginTop: 20,
        marginBottom: 20
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
        alignItems: 'center'
    },

    btnText: {
        color: 'white',
        justifyContent: 'center'
    }
})