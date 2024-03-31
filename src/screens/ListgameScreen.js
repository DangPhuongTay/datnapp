import React,{useContext, useState, useEffect } from "react";
import { Text, View,ActivityIndicator, FlatList, Button, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import {AuthContext} from '../context/AuthContext';

const RankScreen = ({navigation}) =>{
    const {isLoading, userInfo, logout} = useContext(AuthContext);
    return (
        <View style={styles.container}> 
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
            </TouchableOpacity>
        </View>
           
           
          
            );
};
const styles=StyleSheet.create({
    container:{
        backgroundColor: '#62C7F3',
        height: '100%',
        display: 'flex',
        gap:10,
        justifyContent:'center',
        alignItems:'center',
    },
    back:{
        width:40,
        height:40,
        marginRight:'85%',
       marginBottom: '145%'
       
    },
  })

export default RankScreen;
