import React,{useContext, useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import {AuthContext} from '../context/AuthContext';

const RankScreen = ({navigation}) =>{
    return (
        <View>
            <Text></Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>⬅️</Text>
                </TouchableOpacity>
            </View>
            <Text>This is RankScreen</Text>
        </View>
    );
};

export default RankScreen;