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
import imggame1 from '../../assets/images/1024x1024bb.png';
import imggame2 from '../../assets/images/3d-view-puzzle-pieces.jpg';
import { BASE_URL } from "../config";
const ListgameScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const imgs = [imggame1,imggame2];
  let n = 0;
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
                <Image
                  style={styles.img}
                  source={imgs[n++]}
                ></Image>
                <View style={styles.score0}>
                  <View style={styles.score1}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </View>
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
      </View>
    </View>
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
    width: 360,
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
  score0:{
    marginTop: 5,
    flexDirection:'row',
    width: 310,
    justifyContent:'space-between',
    alignItems:'center',
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
    fontSize: 18,
    fontWeight: "500",
    color: "#1E1E1E",
    width: 250,
    textAlign: 'center',
    padding: 10,
    marginLeft: 35  ,
    marginTop: 20,
    color: "#1E1E1E",
    backgroundColor: 'white',
    borderRadius: 22,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2
  },
  score: {
    paddingHorizontal: 15,
    width: 360,
    paddingVertical: 15,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 15,
    height: 270,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  score1: {
    alignItems:'flex-start'
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: "#4B4B4B",
    fontWeight: "bold",
    
  },
  name: {
    color: "#4B4B4B",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
  },
  button: {
    paddingVertical: 12,
    width: 100,
    backgroundColor: "#62C7F3",
    alignItems: "center",
    borderRadius: 20,
  },
  btn: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    textTransform:'uppercase'
  },
  banner: {
    width: "75%",
    height: "15%",
    display: "flex",
    alignItems: "center",
    //backgroundColor: "#fff",
    //borderRadius: 12,
    marginTop: 30,
    marginLeft: 60,
    flexDirection: "row",
    marginBottom: 20,
  },
  introBanner: {
    left: -20,
    top: 55,
    alignItems: "flex-end",
  },
  desBanner: {
    fontSize: 25,
    display: "flex",
    alignItems: "flex-end",
  },
  imgbanner: {
    width: 300,
    height: 150,
    objectFit: "center",
    display: "flex",
    borderRadius: 12,
    marginBottom: 30,
  },
  img: {
    width: 310,
    objectFit:'cover',
    borderRadius: 5,
    height: 160,
    borderWidth: .5,
    borderColor: '#000',
    marginTop: 10,
  },
});
export default ListgameScreen;
