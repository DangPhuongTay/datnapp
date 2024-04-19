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
import { AuthContext } from "../../context/AuthContext";
import { formatTime } from "../../components/constants";
import { BASE_URL } from "../../config";

const HistoryTeacherScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const {userInfo} = useContext(AuthContext);
    const id_user = userInfo.id;
    const [data, setData] = useState([]);
    const getMovies = async () => {
        try {
            const response = await fetch(`${BASE_URL}/test-by-user/${id_user}`);
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
        navigation.navigate('HistoryListUser', {
            testId: e,
          }); 
    };
    
    useEffect(() => {
        getMovies();
    }, []);


    return (
        
        <ImageBackground style={styles.bg} source={require('../../../assets/images/bgcate.png')}>
            
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.back} source={require('../../../assets/images/back.png')}></Image>
            </TouchableOpacity>
            <View style={styles.container1}>
                <View style={styles.text}><Text style={styles.title}> Lịch sử làm bài kiểm tra </Text></View>

                {isLoading ? (
                    <ActivityIndicator/>
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
            
            <View style={styles.score}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.name}>{formatTime(item.created_at)}</Text>
                                <TouchableOpacity onPress={() => this._handleSubmit(item.id)} 
                                        style={styles.button}>            
                                    <Text style={styles.btn}> Xem </Text>
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
        marginTop: 20,
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
        fontSize: 16
    },
    title: {
        fontSize: 16,
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
        height: 35  ,
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
export default HistoryTeacherScreen;