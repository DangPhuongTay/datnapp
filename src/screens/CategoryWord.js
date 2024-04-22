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
        <View style={styles.bg} >
        <View style={styles.header}>
        
        
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
            </TouchableOpacity>
            
            <View style={styles.text}><Text style={styles.title}> Chủ đề</Text></View>
            </View>
            <View style={styles.banner}>
                <Image style={styles.imgbanner} source={require('../../assets/images/item_home_banner.png')} />
                <View style={styles.introBanner}>
                    <Text style={styles.desBanner}>What happens here, stay here</Text>
                    
                </View>
                </View>
        <View style={styles.container}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <View style={styles.score}>
                                <Text style={styles.name}>{item.name}</Text>
                                <View>
                                <TouchableOpacity onPress={() => this._handleSubmit(item.id)} 
                                        style={styles.button}>            
                                    <Text style={styles.btn}> Chơi </Text>
                                </TouchableOpacity>
                            </View>
                            </View>
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
        alignItems: "center",
        justifyContent: "start",
        gap: 10,
        backgroundColor: '#C0EDFC',
      },
    back: {
        width: 40,
        height: 40,
        marginTop: 10,
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
    // text: {
    //     paddingVertical: 10,
    //     paddingHorizontal: 65,
    //     borderRadius: 20,
    //     marginTop: 0,
    //     borderColor: "#000",
    //     alignItems: "center",
    //     flexDirection:'row',
    //     display: 'flex',
    // },
    title: {
        width: 400,
            height: 50,
            marginLeft: 100,
            marginTop: 5,
            fontSize: 30,
            color: "#1E1E1E",
            marginTop: 10,
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
        fontSize: 18,
        right: 10,
        width: 200,
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
    banner: {
        width: '75%',
        height: '15%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 30,
        marginLeft:60,
        flexDirection: 'row',
        marginBottom: 20
    },
    introBanner: {
        marginRight: '40%',

    },
    desBanner: {
        fontSize: 20,
    },
    imgbanner: {
        width: 150,
        height: 150,
        objectFit: 'contain',
        display: 'flex',
        marginLeft: '-10%',
        marginTop: -20,
        marginBottom: 30

    },

}
);
export default CategoryWord;