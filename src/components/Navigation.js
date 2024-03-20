import React,{ useContext} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSreen from "../screens/HomeScreen";
import LoginSreen from "../screens/LoginScreen";
import RegisterSreen from "../screens/RegisterScreen";
import MenuSreen from "../screens/MenuScreen";
import {AuthContext} from '../context/AuthContext';
import StartSreen from "../screens/StartScreen";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userInfo} = useContext(AuthContext);
    return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo ? (
            <Stack.Screen name="Home"
                          component={HomeSreen}
                          options={{headerShown: false}}/>
        ) : (
          <>
            <Stack.Screen name="Start"
                          component={StartSreen}
                          options={{headerShown: false}}/>
            <Stack.Screen name="Login"
                          component={LoginSreen}
                          options={{headerShown: false}}/>
            <Stack.Screen name="Register"
                          component={RegisterSreen}
                          options={{headerShown: false}}/>
          </>
        )}
        <Stack.Screen name="Menu"
                          component={MenuSreen}
                          options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
};

export default Navigation;