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
const ListgameScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}/allgame`);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.back}
            source={require("../../assets/images/back.png")}
          ></Image>
        </TouchableOpacity>

        <View style={styles.text}>
          <Text style={styles.rank}> Danh sách trò chơi </Text>
        </View>
      </View>
      <View style={styles.banner}>
        <Image
          style={styles.imgbanner}
          source={require("../../assets/images/image12/bannerlistgame.jpg")}
        />
        <View style={styles.introBanner}>
          <Text style={styles.desBanner}>What happens here, stay here</Text>
        </View>
      </View>
    <View style={styles.container}>
      
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View style={styles.score}>
            
              <View>
                <Text style={styles.name}>{item.name}</Text>

                <Text style={styles.description}>{item.description}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Category")}
                  style={styles.button}
                >
                  <Text style={styles.btn}> Chơi ngay </Text>
                </TouchableOpacity>
              </View>
            </View>
            // </View>
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
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#C0EDFC",
  },
  list: {
    width: 350,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "flex-start",
  },
  back: {
    width: 40,
    height: 40,
    marginTop: 10,
  },

  bg: {
    width: "100%",
    display: "flex",
    gap: 10,
    backgroundColor: "#C0EDFC",
  },
  header: {
    width: 400,

    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  title: {
    width: 400,
    height: 50,
    marginLeft: 100,
    marginTop: 5,
    fontSize: 30,
    color: "#1E1E1E",
    marginTop: 10,
  },

  rank: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E1E1E",
    width: 400,
    height: 50,
    marginLeft: 50,
    marginTop: 5,
    color: "#1E1E1E",
    marginTop: 10,
  },
  score: {
    paddingHorizontal: 20,
    width: 170,
    paddingVertical: 15,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 15,
    height: 250,
    justifyContent: "space-between",
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: "#4B4B4B",
    fontWeight: "bold",
    width: 150,
    resizeMode: "contain",
    width: 140,
    lineHeight: 22,
  },
  name: {
    color: "#4B4B4B",
    fontSize: 20,
    fontWeight: "bold",
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
    fontWeight: "bold",
  },
  banner: {
    width: "75%",
    height: "15%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 30,
    marginLeft: 60,
    flexDirection: "row",
    marginBottom: 20,
  },
  introBanner: {
    marginRight: "40%",
  },
  desBanner: {
    fontSize: 20,
  },
  imgbanner: {
    width: 300,
    height: 150,
    objectFit: "center",
    //display: "flex",
    
    
    marginBottom: 30,
  },
});
export default ListgameScreen;
