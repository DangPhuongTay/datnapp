import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Image, ImageBackground } from "react-native";
import { AuthContext } from '../context/AuthContext';

const LevelScreen = ({ navigation }) => {
    const { userInfo } = useContext(AuthContext);
    let level = Math.floor(userInfo.score / 10);
    return (
        <ImageBackground source={require('../../assets/images/school.jpg')} resizeMode="cover" style={styles.img}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
                </TouchableOpacity>
                <View style={styles.formscore}>
                    <View style={styles.btnscore}>
                        <Image style={styles.score} source={require('../../assets/images/item6_home_list.png')}></Image>
                        <Text style={styles.scoreNumber}>{userInfo.score}</Text>
                    </View>

                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.bar}>
                    <View style={styles.progressBar}></View>
                    <View style={styles.imgBar}>
                        <Image style={styles.imgLevel} source={require('../../assets/images/young.png')}></Image>
                    </View>

                </View>

                <Image style={styles.main} source={require('../../assets/images/children1.png')}></Image>
                <View style={styles.bglevel}>

                    <Text style={styles.leveltext}>Level {level}</Text>



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
        marginTop: -180

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
        width: 350,
        height: 350,
        bottom: -160

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
        color: '#62C7F3',


    },
    bglevel: {
        bottom: -160,
        width: 150,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8

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
        marginLeft: 5,
        color: '#62C7F3'
    },
    imgLevel: {
        width: 40,
        height: 40
    },
    bar: {
        display: 'flex',
        flexDirection: 'row',
        bottom: -20
    },
    progressBar: {
        width: 300,
        height: 15,
        borderRadius: 24,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#62C7F3'
    },
    imgBar: {
        width: 40,
        height: 40,
        borderRadius: 36,
        backgroundColor: '#62C7F3',
        top: -15,
        left: -5
    }
});
export default LevelScreen;