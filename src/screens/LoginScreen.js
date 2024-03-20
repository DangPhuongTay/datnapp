import React, { useContext, useState } from "react";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from "react-native";
import {AuthContext} from '../context/AuthContext';
import Spinner from "react-native-loading-spinner-overlay";

const LoginSreen = ({navigation}) => {
    const [email, setEmail ] = useState(null);
    const [password, setPassword ] = useState(null);
    const {isLoading, login} = useContext(AuthContext);
  
    return (
        <View style={styles.container}>
            <Text></Text>
            <Spinner visible={isLoading}/>
            <TextInput placeholder="Enter email"
                       style={styles.input}
                       onChangeText={text => setEmail(text)}
                       value={email}/>
            <TextInput placeholder="Enter password"
                       style={styles.input}
                       onChangeText={text => setPassword(text)}
                       value={password}/>
            <TouchableOpacity onPress={() => {login( email, password);}}
                              style={styles.button}>
                <Text>Đăng nhập</Text>
            </TouchableOpacity>
            
            <View style={styles.container1}>
                <Text style={styles.link}>Lưu mật khẩu</Text> 
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>         
                    <Text style={styles.link}>Tạo tài khoản</Text>  
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
        container1: {
            width: 200,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
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
            paddingVertical: 15,
            width: 220,
            marginBottom: 5,
            backgroundColor:'#62C7F3',
            display:'flex',
            alignItems: 'center',
            borderRadius:999,
        },
        link: {
            color: 'blue',
            
        },
    });
export default LoginSreen;