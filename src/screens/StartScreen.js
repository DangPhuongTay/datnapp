import React, { useContext, useState } from "react";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Image } from "react-native";
import {AuthContext} from '../context/AuthContext';

const StartScreen = ({navigation}) => {
  
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/login_img1.png')} 
                    style={styles.img}></Image>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                style={styles.button}>         
                    <Text style={styles.btn}>Bắt đầu</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    input:{
        
        width: 300,
        backgroundColor: '#eee',
        borderRadius:999,
        borderColor:'#62C7F3',
        borderWidth:1,
        paddingHorizontal:20,
        paddingVertical: 10,
    },
    button:{
        paddingVertical: 10,
        width: 220,
        marginBottom: 5,
        backgroundColor:'#62C7F3',
        display:'flex',
        alignItems: 'center',
        borderRadius:999,            
        
    },
    btn:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold'
       
    },
    img:{
        width:200,
        height:200,
        objectFit:'contain',
        marginBottom:10
    },
        link: {
            color: 'blue',
        },
    });
export default StartScreen;