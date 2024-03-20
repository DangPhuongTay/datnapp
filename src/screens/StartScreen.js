import React, { useContext, useState } from "react";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from "react-native";
import {AuthContext} from '../context/AuthContext';

const StartScreen = ({navigation}) => {
  
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>         
                    <Text style={styles.link}>Bắt đầu</Text>
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
            padding: 10,
            width: 200,
            backgroundColor: '#eee',
        },
        button:{
            padding: 10,
            width: 200,
            marginBottom: 5,
            borderColor: '#000',
            display:'flex',
            alignItems: 'center',
            borderWidth: 1,
        },
        link: {
            color: 'blue',
        },
    });
export default StartScreen;