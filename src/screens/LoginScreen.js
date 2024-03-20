import React, { useContext, useState } from "react";
import {Alert, Text, TextInput, View, TouchableOpacity, Button } from "react-native";
import {AuthContext} from '../context/AuthContext';
import Spinner from "react-native-loading-spinner-overlay";

const LoginSreen = ({navigation}) => {
    const [email, setEmail ] = useState(null);
    const [password, setPassword ] = useState(null);
    const {isLoading, login} = useContext(AuthContext);
  
    return (
        <View>
            <Text></Text>
            <Spinner visible={isLoading}/>
            <TextInput placeholder="Enter email"
                       onChangeText={text => setEmail(text)}
                       value={email}/>
            <TextInput placeholder="Enter password"
                       onChangeText={text => setPassword(text)}
                       value={password}/>
            <Button title="Login" 
                    onPress={() => {
                    login( email, password);
                }}
            />
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    );
};

export default LoginSreen;