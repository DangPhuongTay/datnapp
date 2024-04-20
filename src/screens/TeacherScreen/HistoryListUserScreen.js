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
import { BASE_URL } from "../../config";
import { formatTime } from "../../components/constants";
const HistoryListUserScreen = ({route, navigation }) => {
    const {testId,testName} = route.params;
    const [isLoading, setLoading] = useState(true);
    let nub = 1;
    const [data, setData] = useState([]);
    const getMovies = async () => {
        try {
            const response = await fetch(`${BASE_URL}/history/test-history-teacher/${testId}`);
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
        
        <ImageBackground style={styles.bg} source={require('../../../assets/images/bgcate.png')}>
            
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('HistoryTeacher')}>
                <Image style={styles.back} source={require('../../../assets/images/back.png')}></Image>
            </TouchableOpacity>
            <View style={styles.container1}>
                <View style={styles.text}><Text style={styles.title}>Danh sách thực hiện bài kiểm tra: {testName}</Text></View>

                {isLoading ? (
                    <ActivityIndicator/>
                ) : (
                    <FlatList
                        
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
            
                        <View style={styles.score}>
                                <View style={styles.left}>
                                    <Text style={styles.name}>
                                       Người thực hiện: {item.id_user}
                                    </Text>
                                    <Text style={styles.nub}>
                                        {nub++}
                                    </Text>
                                </View>
                                <View style={styles.right}>
                                <Text style={styles.time}>
                                        {formatTime(item.created_at)}
                                    </Text>
                                    <Text style={styles.nubcore}>
                                       điểm số: {item.score}
                                    </Text>

                                </View>
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
    nubcore: {
        marginEnd: -5,
        fontSize: 16,
        color: 'red'
    },
    time:{
        color:'gray',
        marginEnd: -5,
        fontSize: 13   
    },
    nub: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'gray',
    },
    left:{
        alignItems: 'flex-start',
        gap: 5,
        justifyContent: 'flex-start'
    },
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 10,
    },
    right:{
       alignItems: 'flex-end',
       justifyContent: 'space-between'
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
        width: 330,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#0280BD",
        borderRadius: 20,
        marginTop: -25,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
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
        paddingHorizontal: 15,
        width: 330,
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
        fontSize: 16,
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
export default HistoryListUserScreen;