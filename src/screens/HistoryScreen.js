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
const HistoryScreen = ({ navigation }) => {
    const { userInfo } = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);
    const [lesson, setLesson] = useState([]);
    const [data, setData] = useState([]);
    const id_user = userInfo.id;
    const getHistories = async () => {
        try {
            const response = await fetch(`${BASE_URL}/history/lesson-history-user/${id_user}`);
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
        getHistories();
    }, []);


    return (
        
        <ImageBackground style={styles.bg} source={require('../../assets/images/bghistory.jpg')}>
         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
            </TouchableOpacity>    
        <View style={styles.container}>
           
                <View style={styles.text}><Text style={styles.title}> Lịch sử chơi </Text></View>

                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <View style={styles.score}>
                           <View> 
                           <View style={styles.score2}>
                            <View style={styles.text}><Text style={styles.title1}> {item.id_lesson_test}</Text></View>
                            <View style={styles.container1}>
                                <Text style={styles.name}>điểm số: {item.score}</Text>
                                <Text style={styles.nameGame}>{item.created_at}</Text>
                            </View>
                            </View>
                            </View>
                                <TouchableOpacity onPress={() => this._handleSubmit(item.id)} 
                                        style={styles.button}>            
                                    <Text style={styles.btn}> Xem thêm </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                )}

            </View>
            
        </ImageBackground>

    );
};

 const styles=StyleSheet.create({
        bg:{
          width:'100%',
          display:'flex',
          gap:10,
        },
        
        container: {
          height: '100%',
          display: 'flex',
          gap:10,
          justifyContent:'center',
          alignItems:'center',
          marginTop: 50
          
      },
      back:{
        width:40,
        height:40,
        marginLeft:5,
        marginTop:20,
        marginRight: "85%",
      
       
      },
      title:{
        paddingHorizontal:100,
        paddingVertical:10,
        backgroundColor:'#fff',
        marginTop:170,
        alignItems:'center',
        borderRadius:12,
        fontSize: 30,
        color: "#62C7F3",
        fontWeight: "bold",
        
      },
      title1:{
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:"#62C7F3",
        alignItems:'center',
        borderRadius:12,
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        
        
      },
      rank:{
        fontSize:24,
        fontWeight:'bold',
        color:'#62C7F3'
      },
      score:{
        paddingHorizontal:20,
        width:390,
        paddingVertical:10,
        backgroundColor:'#fff',
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:12,
        backgroundColor:'#fff'
      },
      score2:{
        flex: 1,
        flexDirection:'row',
        borderRadius:12,
        alignSelf: 'flex-start',
      },
       point:{
       fontSize:24,
       color: '#4B4B4B',
        fontWeight:'bold'
       },
      name:{
        color:'#1E1E1E',
        fontSize:24,
        fontWeight:'bold'
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
});
      
export default HistoryScreen;