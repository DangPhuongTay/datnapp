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
            <Text style={styles.title}>📝 Lịch sử làm bài</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getHistoriesTest()}>
            <Text style={styles.title}>📝 Lịch sử làm kiểm tra </Text>
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
                  <Text style={styles.title1}> {item.id_lesson_test}</Text>
                  <View style={styles.itemright}>
                    <Text style={styles.name}>điểm số: {item.score}</Text>
                    <Text style={styles.nameGame}>{formatTime(item.created_at)}</Text>
                  </View>

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
    alignItems: 'flex-end',
    height: 80,
    justifyContent: 'space-between'
  },
  container1: {
    width: 380,
    height: 330,
    backgroundColor: 'none'
  },
  bg: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#fff',



  },
  header: {
    width: 430,
    display: 'flex',
    flexDirection: 'row',

  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    top: 25,
    left: -230

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
    width: 190,
    color: 'white',
    backgroundColor: "#62C7F3",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    height: 60,
    borderRadius: 16,
    padding: 10
  },
  title1: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#62C7F3",
    alignItems: 'center',
    borderRadius: 12,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",

  },
  rank: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#62C7F3'
  },

  score2: {
    width: 380,
    height: 100,
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10
  },
  point: {
    fontSize: 24,
    color: '#4B4B4B',
    fontWeight: 'bold'
  },
  name: {
    color: '#1E1E1E',
    fontSize: 20,
    fontWeight: 'bold'
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
    width: 370,
    gap: 5
  },
});

export default HistoryScreen;