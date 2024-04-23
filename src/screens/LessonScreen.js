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
  ScrollView,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../config";
const LessonScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}/lession/all`);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  _handleSubmit = async (e) => {
    navigation.navigate("Quiz", {
      itemId: e,
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View
      style={styles.bg}

    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.back}
            source={require("../../assets/images/back.png")}
          ></Image>

        </TouchableOpacity>
        <Text style={styles.title}>Bài học</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image style={styles.imgBannerLeft}
            source={require("../../assets/images/item9_home_list.png")}></Image>
          <Text style={styles.desBanner}>Đừng xấu hổ khi không biết, chỉ xấu hổ khi không học</Text>
          <Image style={styles.imgBanner}
            source={require("../../assets/images/adult.png")}></Image>

        </View>
        <View style={styles.container1}>


          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <ScrollView style={styles.lessonList}>
              <FlatList
                contentContainerStyle={styles.list}
                data={data}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                  <View style={styles.score}>

                    <Image
                      style={styles.icon}
                      source={require("../../assets/images/item3_home_list.png")}
                    ></Image>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.nameGame}>{item.description}</Text>
                    <View style={styles.btnItem}>
                      <TouchableOpacity
                        onPress={() => this._handleSubmit(item.id)}
                        style={styles.button}
                      >
                        <Text style={styles.btn}> Chọn </Text>

                      </TouchableOpacity>

                    </View>

                  </View>
                )}
              />
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    backgroundColor: '#fff'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    top: 10
  },
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: 10,
  },

  container1: {
    height: 550,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    gap: 10,
    alignItems: "center",
    marginTop: 40,
  },
  back: {
    width: 40,
    height: 40,
    marginRight: "80%",
    marginTop: 20,
    left: 20
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: "85%",
    marginTop: 10,
  },
  banner: {
    width: 350,
    height: 100,
    backgroundColor: '#62C7F3',
    borderRadius: 12,
    top: 30,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  imgBanner: {
    width: 100,
    height: 100,

  },
  imgBannerLeft: {
    width: 50,
    height: 50,
    top: 30,
    left: 5
  },
  desBanner: {
    fontSize: 16,

    width: '60%',
    height: 50
  },
  title: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    top: 27,
    left: -200
  },
  list: {
    width: 350,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "flex-start",
    height: 600,
    top: 30
  },

  score: {
    paddingHorizontal: 15,
    width: 170,
    paddingVertical: 5,
    borderColor: "#62C7F3",
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    height: 230

  },

  nameGame: {
    fontSize: 12,
    color: "#4B4B4B",
    height: 70,
    top: 5,


  },
  lessonList: {
    width: '95%',
    height: 500,

  },
  name: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    height: 50
  },
  btnItem: {
    top: 10,
    alignItems: 'flex-end'
  },
  button: {
    display: 'flex',
    width: 60,
    height: 30,
    backgroundColor: "#62C7F3",
    alignItems: "center",
    borderRadius: 8,
    justifyContent: 'center',
    top: 10
  },
  btn: {
    color: "#fff",
    fontSize: 14,

  },
});
export default LessonScreen;
