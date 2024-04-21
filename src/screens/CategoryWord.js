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
const CategoryWord = ({route , navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [wordle, setWordle] = useState([]);
    const getCartegorys = async () => {
        try {
            const response = await fetch(`${BASE_URL}/wordle/all`);
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
        navigation.navigate('Word', {
            WordleId: e,
          });
        setWordle(e)
    };
    
    useEffect(() => {
        getCartegorys();
    }, []);


    return (
        
        
         <View style={{height: '100%'}}>
      <View
        style={{
          height: '100%',
          backgroundColor: 'powderblue',
        }}>  
        <View style={styles.container}>
        <View style={styles.text}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
            </TouchableOpacity>
            
                <Text style={styles.title}> Chủ đề</Text></View>

                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <View style={styles.score}>
                                <Text style={styles.name}>{item.name}</Text>
                                
                                <TouchableOpacity onPress={() => this._handleSubmit(item.id)} 
                                        style={styles.button}>            
                                    <Text style={styles.btn}> Chọn </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                )}

            </View>
            </View>
            </View>
 
    );
};

const styles = StyleSheet.create({
    
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 10,
        backgroundColor: "powderblue",
    },
  
    
    back: {
        width: 40,
        height: 40,
        marginTop: 20,
    },
    text: {
        paddingVertical: 10,
        paddingHorizontal: 65,
        borderRadius: 20,
        marginTop: 0,
        borderColor: "#000",
        alignItems: "center",
        flexDirection:'row',
        display: 'flex',
    //     paddingHorizontal: 100,
    // paddingVertical: 10,
    // backgroundColor: "#62C7F3",
    // marginTop: 4,
    // alignItems: "center",
    // borderRadius: 12,
    },
    title: {
        fontSize: 32,
        color: "#fff",
        fontWeight: "bold",

    },
    
    score: {
        paddingHorizontal: 20,
        width: 350,
        paddingVertical: 10,
        backgroundColor: "#fff",
        marginTop: 10,
        borderRadius: 12,
        backgroundColor: "#fff",
        flexDirection:'row',
        justifyContent:'space-between',
       borderWidth: 1,
    borderColor: "#000",
    },
    
    name: {
        color: "#1E1E1E",
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
export default CategoryWord;