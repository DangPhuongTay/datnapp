import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  ImageBackground,
} from "react-native";
import { COLORS, SIZES } from "../components/constants";
import data from "../data/QuizData";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LessonScreen } from "../screens/LessonScreen";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../config";
const Quiz = ({ route, navigation }) => {
  const { idLesson } = useState(LessonScreen);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { userInfo } = useContext(AuthContext);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const { itemId, itemname } = route.params;
  let itemIdNet = itemId + 1;
  const [datas, setData] = useState([]);
  const addScore = (score_add) => {
    fetch(`${BASE_URL}/addcoin/${userInfo.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coin: score_add,
      }),
    });
    navigation.navigate("Lesson");
    restartQuiz();
  };

  const addHistory = (score) => {
    fetch(`${BASE_URL}/history/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_user: userInfo.id,
        id_create: "0",
        type: "lesson_type",
        id_lesson_test: itemId,
        score: score,
      }),
    });
    console.log(userInfo.id, "0", "lesson_type", itemId, score);
  };

  const getLession = async () => {
    try {
      const response = await fetch(`${BASE_URL}/question-by-lession/${itemId}`);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getLession();
  }, []);
  let datatest = datas;
  let datetessst = [];
  for (const e of datatest) {
    let optiontest = [];
    optiontest.push(e.answer_a);
    optiontest.push(e.answer_b);
    optiontest.push(e.answer_c);
    optiontest.push(e.answer_d);
    var item = {
      question: e.question_text,
      options: optiontest,
      correct_option: e.answer,
    };
    datetessst.push(item);
  }
  const allQuestions = datetessst;
  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]["correct_option"];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginTop: -50,
          padding: 10,
          flexDirection: "row",

          justifyContent: "center",
        }}
      >
        {/* Question Counter */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            width: 40,
            height: 40,
            backgroundColor: "#62C7F3",
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              marginRight: 2,
              fontWeight: "bold",
            }}
          >
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{ color: "#fff", fontSize: 14 }}>
            / {allQuestions.length}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: "#4B4B4B",
            fontSize: 20,
            fontWeight: "bold",
            width: 250,
            marginLeft: 20,
          }}
        >
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {allQuestions[currentQuestionIndex]?.options.map((option) => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 1,
              borderColor:
                option == correctOption
                  ? "#00C851"
                  : option == currentOptionSelected
                  ? "#ff4444"
                  : "#818384",
              backgroundColor:
                option == correctOption
                  ? "#00C851" + "40"
                  : option == currentOptionSelected
                  ? "#ff4444" + "40"
                  : "#62C7F3",
              width: 320,
              height: 40,
              borderRadius: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginVertical: 5,
            }}
          >
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
              {option}
            </Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {option == correctOption ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: "#00C851",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: "#ff4444",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 10,
            width: "85%",
            backgroundColor: "#3498db",
            padding: 10,
            borderRadius: 999,
            marginLeft: 30,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Chọn
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,
          backgroundColor: "#00000020",
          borderWidth: 1,
          borderColor: "#ddd",
        }}
      >
        <Animated.View
          style={[
            {
              height: 18,
              borderRadius: 20,
              backgroundColor: "#3498db",
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: "#f3f4df",
          position: "relative",
        }}
      >
        <View
          style={{
            textAlign: "center",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../../assets/images/img_back.png")}
              style={{
                width: 40,
                height: 40,
                marginTop: -20,
                marginBottom: 20,
              }}
            ></Image>
            {/* <Image source={require('../../assets/images/back.png')}
                            style={{
                                width: 40,
                                height: 40,
                                marginTop: -20,
                                marginBottom: 20
                            }}>
                        </Image> */}
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
                top: -55,
                left: 80,
                width: 250,
                alignItems: "center",
              }}
            >
              {itemname}
            </Text>
          </TouchableOpacity>
          <ImageBackground
            source={require("../../assets/images/score.png")}
            style={{
              width: 40,
              height: 40,
              marginTop: -20,
              marginBottom: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
              }}
            >
              {score}
            </Text>
          </ImageBackground>
        </View>
        {/* ProgressBar */}
        {renderProgressBar()}
        <Image
          source={require("../../assets/images/item4_home_list.png")}
          style={{ width: 90, height: 90, marginTop: 30 }}
        ></Image>
        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

        {/* Next Button */}
        {renderNextButton()}

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#AECCF2",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                padding: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {score > allQuestions.length / 2
                  ? "Tốt!"
                  : "Bạn cần cố gắng hơn!"}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color:
                      score > allQuestions.length / 2 ? "#00C851" : "#ff4444",
                  }}
                >
                  {score}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#121214",
                  }}
                >
                  / {allQuestions.length}
                </Text>
              </View>
              {/* Retry Quiz button */}
              <TouchableOpacity
                onPress={() => {
                  addScore(score);
                  addHistory(score);
                }}
                style={{
                  backgroundColor: "#3498db",
                  padding: 20,
                  width: "100%",
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Quay về
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Background Image */}
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
