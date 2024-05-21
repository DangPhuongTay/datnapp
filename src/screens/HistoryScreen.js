import React, { useContext, useState, useEffect } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../config";
import { formatTime } from "../components/constants";
const color_text_black = "#221E1B";
const color_text_yellow = "#F3AE29";
const color_background = "#f3f4df";
const color_background_white = "#FFFFFF";
const color_background_blue_3 = "#398AFF";
const color_background_blue_1 = "#81D9FF";
const color_background_blue_2 = "#D0EFFF";
const color_background_green_1 = "#7DF4A8";
const color_background_green_2 = "#008000";
const color_background_gray = "rgba(0, 0, 0, 0.21)";
const color_background_gray_1 = "#edede9";
const color_background_red = "#e01e37";

const HistoryScreen = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(true);
  let [data, setData] = useState([]);
  const id_user = userInfo.id;

  const getHistories = async () => {
    try {
      const response = await fetch(`${BASE_URL}/history/lesson-history-user/${id_user}`);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const getHistoriesTest = async () => {
    try {
      const response = await fetch(`${BASE_URL}/history/test-history-user/${id_user}`);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHistories();
  }, []);



  return (

    <View style={styles.bg} >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lịch sử</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.text}>
          <TouchableOpacity onPress={() => getHistories()}>
            <Text style={styles.title}>Bài học</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getHistoriesTest()}>
            <Text style={styles.title}>Bài kiểm tra </Text>
          </TouchableOpacity>
        </View>

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.container1}>
            <FlatList
              data={data}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <View style={styles.score2}>
                 
                  <View style={styles.itemright}>
                    <Text style={styles.title1}>{item.id_lesson_test}</Text>
                    <Text style={styles.nameGame}>{formatTime(item.created_at)}</Text>
                  </View>
                  <Text style={styles.name}> {item.score} điểm</Text>
                </View>
              )}
            />
          </View>
        )}

      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  itemright: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 5
  },
  container1: {
    width: 380,
    height: 540,
  },
  bg: {
    flex: 1,
    width: '100%',
    display: 'flex',
    backgroundColor: color_background_blue_1,
  },
  header: {
    width: 430,
    display: 'flex',
    flexDirection: 'row',

  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 310,
    lineHeight: 50,
    marginBottom: 10,
    borderRadius: 10,
    textAlign: 'center',
    top: 25,
    left: -350,
    color: color_background_blue_3,
    backgroundColor: color_background_white,
    textTransform: 'uppercase'

  },
  container: {
    height: 580,
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  back: {
    width: 40,
    height: 40,
    marginLeft: 5,
    marginTop: 20,
    marginRight: "85%",

  },
  title: {
    width: 180,
    color: color_background_white,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 16,
    padding: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  title1: {
    alignItems: 'center',
    borderRadius: 12,
    fontSize: 18,
    color: color_text_black,
  },
  rank: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#62C7F3'
  },

  score2: {
    width: 380,
    flexDirection: 'row',
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color_background_white,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    padding: 10,
    marginBottom: 10,
    paddingHorizontal: 20
  },
  point: {
    fontSize: 24,
    color: '#4B4B4B',
    fontWeight: 'bold'
  },
  name: {
    width: 50,
    lineHeight: 50,
    color: color_background_white,
    fontWeight: 'bold',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    textTransform: 'uppercase',
    backgroundColor: color_background_blue_3,
    borderRadius: 999,
    fontSize: 12
  },
  nameGame: {
    color: color_background_blue_3,
    fontSize: 12,
 
  },
  button: {
    paddingVertical: 6,
    width: 100,
    height: 35,
    backgroundColor: '#62C7F3',
    alignItems: 'center',
    borderRadius: 15,
  },
  btn: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',

  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 370,
    gap: 5
  },
});

export default HistoryScreen;