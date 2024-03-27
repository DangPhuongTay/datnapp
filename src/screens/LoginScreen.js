import React, { useContext, useState } from "react";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from "react-native";
import {AuthContext} from '../context/AuthContext';
import Spinner from "react-native-loading-spinner-overlay";



const LoginSreen = ({navigation}) => {
    const [email, setEmail ] = useState(null);
    const [password, setPassword ] = useState(null);
    const {isLoading, login} = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            
            <Spinner visible={isLoading}/>
            <Image source={require('../../assets/images/login_img.png')} style={styles.img}></Image>
            <TextInput placeholder="Email"
                       style={styles.input}
                       onChangeText={text => setEmail(text)}
                       value={email}/>
            <TextInput placeholder="Mật khẩu"
                       style={styles.input}
                       onChangeText={text => setPassword(text)}
                       value={password}/>
              <View style={styles.container1}>
               
                <Text style={styles.link}>Lưu mật khẩu</Text> 
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>         
                    <Text style={styles.link}>Tạo tài khoản</Text>  
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity onPress={() => {login( email, password);}}
                              style={styles.button}>
                <Text style={styles.btn}>Đăng nhập</Text>
            </TouchableOpacity>
            
          
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
        container1: {
            width: 280,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:10,
            marginBottom:20
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
        link: {
            color: '#000',
            textDecorationLine:'underline',
            
            
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
        
    });
export default LoginSreen;