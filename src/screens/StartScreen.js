import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Image, ImageBackground } from "react-native";
import { AuthContext } from '../context/AuthContext';

const StartScreen = ({ navigation }) => {

    return (
        <ImageBackground style={styles.container}>
            <Image style={styles.img} source={require('../../assets/images/item_start.png')} >

            </Image>
            <Text style={styles.title}> Chào mừng bạn đến với English App!

            </Text>
            <Text style={styles.title}> Hãy thử xem chúng ta có gì nhé

            </Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                    style={styles.button}>

                    <Text style={styles.btn}>Bắt đầu</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>





    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C0EDFC',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop: 20
    },
    input: {

        width: 300,
        backgroundColor: '#eee',
        borderRadius: 999,
        borderColor: '#62C7F3',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    button: {
        paddingVertical: 10,
        width: 220,
        marginTop: '-40%',
        backgroundColor: '#62C7F3',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 999,

    },
    btn: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'

    },
    img: {
        width: '100%',
        height: '60%',
        objectFit: 'contain',
        marginBottom: 200

    },
    link: {
        color: 'blue',
    },
    title: {
        fontSize: 18,

        color: '#4CA6C2',
        bottom: 200
    }
});
export default StartScreen;