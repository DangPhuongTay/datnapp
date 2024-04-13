import React, { useContext, useState } from "react";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Image, ImageBackground } from "react-native";
import {AuthContext} from '../context/AuthContext';

const SystemGame = ({navigation}) => {
  
    return (
      
      <ImageBackground source={require('../../assets/images/bgsystem.jpg')} resizeMode="cover" style={styles.img}>
        <View>
            
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
        
        
        
        <View style={styles.container}>
        
        <Text style={[styles.color]}> Bạn là? </Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                style={styles.button}>         
                    <Text style={styles.btn}> Giáo viên </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                style={styles.button}>         
                    <Text style={styles.btn}> Học sinh </Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </View>
</ImageBackground>

    );
};
const styles = StyleSheet.create({
  container: {
      height: '55%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
  },
  back:{
      width:40,
      height:40,
      marginRight:'85%',
      marginTop:10,
      marginLeft: 10
     
  },
  color: {
      color: '#62C7F3',
      fontWeight: 'bold',
      fontSize: 40,
  },
  button:{
      paddingVertical: 15,
      width: 300,
      marginBottom: 5,
      backgroundColor:'#62C7F3',
      display:'flex',
      alignItems: 'center',
      borderRadius:999,            
  
  },
  btn:{
      color:'#fff',
      fontSize:25,
      fontWeight:'bold',
  },
  img:{
      flex:1,
      objectFit:'cover',
      marginBottom:0
  },
     
    });
export default SystemGame;