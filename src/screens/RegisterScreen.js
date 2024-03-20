import React, {useContext, useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Button } from "react-native";
import {AuthContext} from '../context/AuthContext';
import Spinner from "react-native-loading-spinner-overlay";

const RegisterSreen = ({navigation}) => {
    const [name, setName ] = useState(null);
    const [email, setEmail ] = useState(null);
    const [password, setPassword ] = useState(null);

    const {isLoading, register} = useContext(AuthContext);

    return (
        <View>
            <Text></Text>
            <Spinner visible={isLoading}/>
            <TextInput placeholder="Enter name"
                    onChangeText={text => setName(text)}
                    value={name}/>
            <TextInput placeholder="Enter email"
                    onChangeText={text => setEmail(text)}
                    value={email}/>
            <TextInput placeholder="Enter password"
                    onChangeText={text => setPassword(text)}
                    value={password}/>
            <Button title="Register" 
                    onPress={() => {
                    register(name, email, password);
                }}
            />
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterSreen;