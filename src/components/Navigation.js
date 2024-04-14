import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSreen from "../screens/HomeScreen";
import LoginSreen from "../screens/LoginScreen";
import RegisterSreen from "../screens/RegisterScreen";
import MenuSreen from "../screens/MenuScreen";
import { AuthContext } from '../context/AuthContext';
import StartSreen from "../screens/StartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import InfoScreen from "../screens/InfoScreen";
import RankScreen from "../screens/RankScreen";
import QuizScreen from "../screens/QuizScreen";
import { Button } from "react-native";
import WordleScreen from "../../src/screens/gameScreen/WordleSreen";
import ListgameScreen from "../screens/ListgameScreen";
import PasswordScreen from "../screens/PasswordScreen";
import LessonScreen from "../screens/LessonScreen";
import SystemGame from "../screens/SystemGame";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo? (
          <>
            <Stack.Screen name="Home"
              component={HomeSreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="Menu"
              component={MenuSreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="Profile"
              component={ProfileScreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="Info"
              component={InfoScreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="Rank"
              component={RankScreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="GameWordle"
              component={WordleScreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="Quiz"
              component={QuizScreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="Listgame"
              component={ListgameScreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="Password"
              component={PasswordScreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="Lesson"
              component={LessonScreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="System"
              component={SystemGame}
              options={{ headerShown: false }} />

          </>
        ) : (
          <>
            <Stack.Screen name="Start"
              component={StartSreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="Login"
              component={LoginSreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="Register"
              component={RegisterSreen}
              options={{ headerShown: false }} />

          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;