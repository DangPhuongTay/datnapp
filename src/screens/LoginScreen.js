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
                <Text>Login</Text>
            </TouchableOpacity>
            
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                 
                    <Text style={styles.link}>Register</Text>
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
export default LoginSreen;