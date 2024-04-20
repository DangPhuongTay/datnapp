import React, { useContext, useState } from "react";
import axios from 'axios';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Image, ImageBackground } from "react-native";
import {AuthContext} from '../../context/AuthContext';
import { BASE_URL } from "../../config";
const SystemTeacher = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const {userInfo, logout } = useContext(AuthContext);
    const id_user = userInfo.id;
    const role = "0";
    console.log(id_user,role);
    const updateRole = (id_user) => {
        setIsLoading(true);
        axios
        .patch(`${BASE_URL}/user/update-role/${id_user}`,{
            role
        }).then(res => {
            console.log(res.data);
        }).catch(e => {
           console.log(`register error: ${e}`);
           setIsLoading(false);
        });logout();
     };
    return (
      
      <ImageBackground source={require('../../../assets/images/bgsystem.jpg')} resizeMode="cover" style={styles.img}>
        <View>
            
            <TouchableOpacity onPress={() => navigation.navigate('HomeTeacher')}>
            <Image style={styles.back} source={require('../../../assets/images/back.png')}></Image>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
        
        
        
        <View style={styles.container}>
        
        <Text style={[styles.color]}> Chuyển về vai trò học sinh</Text>
            <View>
                <TouchableOpacity onPress={() => updateRole(id_user)}
                style={styles.button}>         
                    <Text style={styles.btn}> Xác nhập </Text>
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
      fontSize: 20,
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
export default SystemTeacher;