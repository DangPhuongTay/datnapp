import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeSreen from "../screens/HomeScreen";
import LoginSreen from "../screens/LoginScreen";
import RegisterSreen from "../screens/RegisterScreen";
import MenuSreen from "../screens/MenuScreen";
import { AuthContext } from "../context/AuthContext";
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
import CategoryWord from "../screens/CategoryWord";
import ListTestScreen from "../screens/ListTestScreen";
import WordScreen from "../screens/WordScreen";
import CreateScreen from "../screens/TeacherScreen/CreateScreen";
import DetailScreen from "../screens/TeacherScreen/DetailScreen";
import ListTestTeacher from "../screens/TeacherScreen/ListTestTeacherScreen";
import LevelScreen from "../screens/LevelScreen";
import HistoryScreen from "../screens/HistoryScreen";
import HistoryTeacherScreen from "../screens/TeacherScreen/HistoryTeacherScreen";
import HistoryListUserScreen from "../screens/TeacherScreen/HistoryListUserScreen";
import MenuTeacherScreen from "../screens/TeacherScreen/MenuTeacherScreen";
import HomeTeacherScreen from "../screens/TeacherScreen/HomeTeacherScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const teacher = userInfo?.role == 1;
  const student = userInfo?.role == 0;
  const { userInfo } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo?.role ? (
          <>
            {userInfo.role == 0 ? (
              <>
                <Stack.Screen
                  name="Home"
                  component={HomeSreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Menu"
                  component={MenuSreen}
                  options={{ headerShown: false }}
                />

                <Stack.Screen
                  name="Rank"
                  component={RankScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="GameWordle"
                  component={WordleScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Quiz"
                  component={QuizScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Listgame"
                  component={ListgameScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Lesson"
                  component={LessonScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="System"
                  component={SystemGame}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Category"
                  component={CategoryWord}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ListTest"
                  component={ListTestScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Word"
                  component={WordScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Level"
                  component={LevelScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="History"
                  component={HistoryScreen}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="HomeTeacher"
                  component={HomeTeacherScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="MenuTeacher"
                  component={MenuTeacherScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Create"
                  component={CreateScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ListTestTeacher"
                  component={ListTestTeacher}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Detail"
                  component={DetailScreen}
                  options={{ headerShown: false }}
                />
            <Stack.Screen
              name="HistoryTeacher"
              component={HistoryTeacherScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HistoryListUser"
              component={HistoryListUserScreen}
              options={{ headerShown: false }}
            />
              </>
            )}
            <Stack.Screen
              name="Info"
              component={InfoScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Password"
              component={PasswordScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Start"
              component={StartSreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginSreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterSreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
