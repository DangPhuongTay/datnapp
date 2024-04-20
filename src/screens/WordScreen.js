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
    Alert
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../config";


const WordScreen = ({route, navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [category, setCategory] = useState({});
    const { WordleId } = route.params;
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

    _handleSubmits = async (e) => 
      {  
        try {
            const response = await fetch(`${BASE_URL}/wordl/${e}`);
            const json = await response.json();
            await navigation.navigate('GameWordle', {
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
        
        <ImageBackground style={styles.bg} source={require('../../assets/images/bgcate.png')}>
            
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Category')}>
                <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
            </TouchableOpacity>
            <View style={styles.container1}>
                <View style={styles.text}><Text style={styles.title}>{category.name}</Text></View>

                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <View style={styles.score}>
                                <Text style={styles.name}>{item.vietnamese}</Text>
                                
                                <TouchableOpacity onPress={() => _handleSubmits(item.id)} 
                                        style={styles.button}>            
                                    <Text style={styles.btn}> Chọn </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                )}

            </View>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 10,
    },
  
    container1:{
        height:550,
        width:'90%',
        backgroundColor:'#fff',
        borderRadius:20,
        gap:10,
        alignItems:'center',
        marginTop:10
    },
    
    back: {
        width: 40,
        height: 40,
        marginRight: "85%",
        marginTop: 10,
    },
    text: {
        paddingVertical: 10,
        paddingHorizontal: 65,
        backgroundColor: "#0280BD",
        borderRadius: 20,
        marginTop: -25,
        borderWidth: 1,
        borderColor: "#000",
        alignItems: "center",
 
    },
    title: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",

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
        width: 300,
        paddingVertical: 10,
        backgroundColor: "#fff",
        marginTop: 10,
        borderRadius: 12,
        backgroundColor: "#AECCF2",
        flexDirection:'row',
        justifyContent:'space-between',
     
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

}
);
export default WordScreen;