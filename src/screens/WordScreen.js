import React, { createContext, useState, useEffect } from "react";
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
  Alert,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../config";

const WordScreen = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState({});
  const { WordleId } = route.params;
  let rank = 1;
  const getWords = async () => {
    try {
      const response = await fetch(`${BASE_URL}/wordl-by-wordle/${WordleId}`);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const getCartegory = async () => {
    try {
      const response = await fetch(`${BASE_URL}/wordle/${WordleId}`);
      const json = await response.json();
      setCategory(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  _handleSubmits = async (e) => {
    try {
      const response = await fetch(`${BASE_URL}/wordl/${e}`);
      const json = await response.json();
      await navigation.navigate("GameWordle", {
        WordleId: WordleId,
        english: json.data.english,
        vietnamese: json.data.vietnamese,
        type: json.data.type,
        pronounce: json.data.pronounce,
        description: json.data.description,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCartegory();
    getWords();
  }, []);

  return (
    
      <View style={styles.bg} >
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate("Category")}>
      
        <Image
          style={styles.back}
          source={require("../../assets/images/back.png")}
        ></Image>
      </TouchableOpacity>
       
        <View style={styles.text}>
          <Text style={styles.title}>{category.name}</Text>
        </View> 
     </View>
     <View style={styles.container}>
      <View style={styles.text1}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/image12/crossword.png")}
        ></Image>
        <View>
        <Text style={styles.title1}> Cách chơi: </Text>
        <Text style={styles.title2}>
           Khi bạn bước vào trò chơi, bạn sẽ được cung cấp cho bạn các ô trống,
          nhiệm vụ của bạn chỉ việc đọc các từ được gợi ý, đoán ra từ vựng được
          ẩn dấu và điền chúng vào chỗ trống.{" "}
        </Text>
      </View>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View style={styles.score}>
              <Text style={styles.name}>{rank++}  {item.vietnamese}</Text>

              <TouchableOpacity
                onPress={() => _handleSubmits(item.id)}
                style={styles.button}
              >
                <Text style={styles.btn}> Chọn </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View></View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: 10,
    backgroundColor: '#C0EDFC',
  },

  back: {
    width: 40,
    height: 40,
    marginRight: 1,
  },
  bg: {
    width: '100%',
    display: 'flex',
    gap: 10,
    backgroundColor: '#C0EDFC'
  },
  header: {
    width: 400,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10

  },
  text: {
    marginTop: 10,
  },
  title: {
    width: 400,
        height: 50,
        marginLeft: 50,
        marginTop: 20,
        fontSize: 20,
        color: "#1E1E1E",
        fontWeight: "bold",
  },
  text1: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    wight: 300,
    gap: 10,
    //alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  title1: {
    fontSize: 22,
    marginStart: -5,
    color: "#1E1E1E",
  },
  title2: {
    fontSize: 15,
    color: "#1E1E1E",
  },
  icon: {
    width: 50,
    height: 50,
    // marginRight: "85%",
    marginTop: 10,
  },
  

  score: {
    paddingHorizontal: 20,
    width: 350,
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: "#ffff",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  name: {
    color: "#4b4b4b",
    width: 200,
    fontSize: 20,
  },
  button: {
    paddingVertical: 6,
    width: 100,
    backgroundColor: "#62C7F3",
    alignItems: "center",
    borderRadius: 15,
  },
  btn: {
    color: "#fff",
    fontSize: 14,
  },
});
export default WordScreen;
