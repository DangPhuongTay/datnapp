import React,{useContext, useState } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import {AuthContext} from '../context/AuthContext';

const MenuSreen = ({navigation}) =>{
    const { isLoading, userInfo, logout } = useContext(AuthContext);

    return (
        <ImageBackground source={require('../../assets/images/bgmenu.png')} resizeMode="cover" style={styles.img}>
        <View>
        
            <Text></Text>
            <View>
            
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
                </TouchableOpacity>
            </View>
            
            
            <View style={styles.container}>
            
            <Text style={[styles.color]}> Menu </Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Listgame')}
                style={styles.button}>            
                    <Text style={styles.btn}> Chơi </Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Rank')}
                style={styles.button}>            
                    <Text style={styles.btn}> Cấp độ </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Rank')}      
                style={styles.button}>   
                    <Text style={styles.btn}> Xếp hạng </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                style={styles.button}>            
                    <Text style={styles.btn}> Lịch sử </Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}
                style={styles.button}>            
                    <Text style={styles.btn}> Thông báo </Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={logout}
                style={styles.button}> 
                <Text style={styles.btn}> Đăng xuất </Text>
            </TouchableOpacity>
            </View>
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
        back:{
            width:40,
            height:40,
            marginRight:'85%',
            marginTop:10,
            marginLeft: 4
           
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