import React, { useContext, useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from '../context/AuthContext';

const HomeSreen = ({ navigation }) => {

    const { isLoading, userInfo, logout } = useContext(AuthContext);

    return (
        <View>
            <Text></Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                    <Text>Info</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Rank')}>
                    <Text>Rank</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('GameWordle')}>
                    <Text>Game 1</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Listgame')}>
                        <Text>List Game</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                    <Text>Quiz</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Lesson')}>
                    <Text>Lesson</Text>
                </TouchableOpacity>
            </View>
            <Spinner visible={isLoading} />
            <Text>{userInfo.name}</Text>
            <Text>{userInfo.email}</Text>
            <Button title="Logout" color="red" onPress={logout} />
        </View>
    );
};

export default HomeSreen;