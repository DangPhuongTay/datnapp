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
  <View style={styles.container}>
    <View>
      <TouchableOpacity onPress={() => this._handleSubmit(item.id)} >
        <Image
          style={styles.back}
          source={require("../../assets/images/back.png")}
        ></Image>
      </TouchableOpacity>

      

      <View style={styles.title}>
        <Text style={styles.rank}> Trò chơi </Text>
      </View>
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
          <ImageBackground source={require("../../assets/images/listgame2.jpg")} 
                            style={styles.score}>
            {/* <View style={styles.score}> */}
            
            
              <Text style={styles.name}>{item.name}</Text>
              
              <Text style={styles.nameGame}>{item.description}</Text>
              <View>
            <TouchableOpacity onPress={() => navigation.navigate('Category')}
                style={styles.button}>            
                    <Text style={styles.btn}> Xem thêm </Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
            // </View>
          )}
        />
      )}
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
    backgroundColor: '#62C7F3',
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
    marginLeft: -45,
    marginTop: 25,
  },
  
  title: {
    paddingHorizontal: 100,
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginTop: 4,
    alignItems: "center",
    borderRadius: 12,
  },
  rank: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#62C7F3",
  },
  score: {
    paddingHorizontal: 20,
    width: 170,
    paddingVertical: 10,
    //backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 12,
    // backgroundColor: "#AECCF2",
  },
  nameGame: {
    fontSize: 20,
    color: "#4B4B4B",
    fontWeight: "bold",
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  button:{
    paddingVertical: 6,
    width: 100,
    backgroundColor:'#62C7F3', 
    alignItems: 'center',
    borderRadius:15,            
},
btn:{
    color:'#fff',
    fontSize:14,
    fontWeight:'bold',
},
});
export default ListgameScreen;
