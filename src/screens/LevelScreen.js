import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Image, ImageBackground } from "react-native";
import { AuthContext } from '../context/AuthContext';

const LevelScreen = ({ navigation }) => {
    const { isLoading, userInfo, logout } = useContext(AuthContext);
    const [text, onChangeText] = React.useState('');
    return (
        <ImageBackground source={require('../../assets/images/bglevel.jpg')} resizeMode="cover" style={styles.img}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
                </TouchableOpacity>
                <View style={styles.formscore}>
                    <View style={styles.btnscore}>
                        <Image style={styles.score} source={require('../../assets/images/image12/tree.png')}></Image>
                        <Text style={styles.scoreNumber}>0</Text>
                    </View>

                </View>
            </View>

            <View style={styles.container}>

                <Image style={styles.main} source={require('../../assets/images/image12/main.png')}></Image>
                <View style={styles.bglevel}>
                    <ImageBackground style={styles.levelnumber} source={require('../../assets/images/image12/numberlevell.png')}>
                        <Text style={styles.leveltext}>Level 1/12</Text>
                    </ImageBackground>


                </View>

            </View>
        </ImageBackground >

    );
};
const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 700,
        display: 'flex',
        gap: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',



    },
    header: {
        width: 230,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 160,
        marginTop: 10

    },
    back: {
        width: 40,
        height: 40,
        marginRight: '85%',
        marginTop: '0%',
        marginLeft: 4

    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        width: 250,
        height: 250,
        marginTop: 250,

    },
    levelnumber: {
        width: 200,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    leveltext: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 20

    },
    bglevel: {
        marginBottom: 40
    },
    formscore: {
        width: 150,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',



    },
    score: {
        width: 30,
        height: 30
    },
    btnscore: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,

        alignItems: 'center'
    },
    scoreNumber: {
        fontSize: 28,
        fontWeight: '800',
        marginLeft: 5
    }
});
export default LevelScreen;