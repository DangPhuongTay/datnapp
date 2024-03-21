import React, {useContext, useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Button,StyleSheet,Image } from "react-native";
import {AuthContext} from '../context/AuthContext';
import Spinner from "react-native-loading-spinner-overlay";

const RegisterSreen = ({navigation}) => {
    const [name, setName ] = useState(null);
    const [email, setEmail ] = useState(null);
    const [password, setPassword ] = useState(null);

    const {isLoading, register} = useContext(AuthContext);

    return (
        <View style={styles.container}>
             
            <Spinner visible={isLoading}/>
            <Image style={styles.img} source={require('../../assets/images/Register_img1.png')} />
            <TextInput placeholder="Tên"
                    onChangeText={text => setName(text)}
                    value={name}
                    style={styles.input}/>
            <TextInput placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                    style={styles.input}/>
            <TextInput placeholder="Mật khẩu"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    style={styles.input}/>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Đã có tài khoản?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} title="Đăng ký" 
                    onPress={() => {
                    register(name, email, password);
                }}><Text style={styles.btn}>Đăng ký</Text></TouchableOpacity>
                
            
            
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
    link: {
        color: '#000',
        textDecorationLine:'underline',
        marginStart:170,
        marginBottom:20
        
    },
    btn:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold'
       
    },
    img:{
        width:150,
        height:150,
        objectFit:'contain',
        marginBottom:10
    },
    
});
export default RegisterSreen;