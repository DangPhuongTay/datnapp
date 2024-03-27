import React,{useContext, useState } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import {AuthContext} from '../context/AuthContext';

const MenuSreen = ({navigation}) =>{
    return (
        <ImageBackground source={require('../../assets/images/bgmenu.png')} resizeMode="cover" style={styles.img}>
        <View>
        
            <Text></Text>
            <View>
            
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>⬅️</Text>
                </TouchableOpacity>
            </View>
            
            
            <View style={styles.container}>
            
            <Text style={[styles.color]}> Menu </Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                style={styles.button}>            
                    <Text style={styles.btn}> 1 người chơi </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                style={styles.button}>            
                    <Text style={styles.btn}> 2 người chơi </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                style={styles.button}>            
                    <Text style={styles.btn}> Cấp độ </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}      
                style={styles.button}>   
                    <Text style={styles.btn}> Xếp hạng </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                style={styles.button}>            
                    <Text style={styles.btn}> Lịch sử</Text>
                </TouchableOpacity>
            </View>
            {/* <Image source={require('../../assets/images/menu1.png')} 
                    style={styles.img}></Image> */}
                
        </View>
        </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
        container: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            gap: 10,
        },
        
          color: {
            color: '#62C7F3',
            fontWeight: 'bold',
            fontSize: 50,
          },
    button:{
        paddingVertical: 15,
        width: 300,
        marginBottom: 5,
        backgroundColor:'#62C7F3',
        display:'flex',
        alignItems: 'center',
        borderRadius:15,            
        
    },
    btn:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold',
    },
    img:{
        flex:1,
        objectFit:'cover',
        marginBottom:15
    },
    
});
export default MenuSreen;