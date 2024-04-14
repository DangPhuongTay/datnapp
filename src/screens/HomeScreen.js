import React, { useContext, useState } from "react";
import { Text, View, Button, TouchableOpacity,StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from '../context/AuthContext';

const HomeSreen = ({ navigation }) => {

    const { isLoading, userInfo, logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>header</Text>
            </View>
            <View style={styles.banner}>
                <Text>banner</Text>
            </View>
            <View style={styles.context}>
                <Text>context</Text>
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
        </View>
    );
};
const styles = StyleSheet.create({

})
export default HomeSreen;