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
const LessonScreen = ({ navigation }) => {
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
    _handleSubmit = async (e) => 
    {   
        
        navigation.navigate('Quiz', {
            itemId: e,
          }); 
    };
    
    useEffect(() => {
        getMovies();
    }, []);


    return (
        <ImageBackground style={styles.bg} source={require('../../assets/images/background.jpg')}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.text}><Text style={styles.title}>Bài học</Text></View>

                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <View style={styles.score}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.nameGame}>{item.description}</Text>
                                <TouchableOpacity onPress={() => this._handleSubmit(item.id)} >
                                    <Text>Chọn</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                )}

            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    bg: {
        width: "100%",
        height: 932,

    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    back: {
        width: 40,
        height: 40,
        marginRight: "85%",
        marginTop: 35,
    },
    text: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#62C7F3",
        borderRadius: 20,
        marginTop: 50,
        borderWidth: 1,
        borderColor: "#000"


    },
    title: {
        fontSize: 32,
        color: "#fff",
        fontWeight: "bold"
    },
    list: {
        width: 350,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "flex-start",
    },

    score: {
        paddingHorizontal: 20,
        width: 170,
        paddingVertical: 10,
        backgroundColor: "#fff",
        marginTop: 10,
        borderRadius: 12,
        backgroundColor: "#AECCF2",
    },
    nameGame: {
        fontSize: 15,
        color: "#4B4B4B",
        fontWeight: "bold",
    },
    name: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
}
);
export default LessonScreen;