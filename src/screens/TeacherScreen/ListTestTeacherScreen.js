import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from '../../context/AuthContext';
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
import { BASE_URL } from "../../config";
import { formatTime } from "../../components/constants";
const ListTestTeacher = ({navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const {userInfo} = useContext(AuthContext);
    const id_user = userInfo.id;
    const [tests, setTests] = useState();
    const getTest = async () => {
        try {
            const response = await fetch(`${BASE_URL}/test-by-user/${id_user}`);
            const json = await response.json();
            setTests(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    _handleSubmit = async (e) => 
    {   
        navigation.navigate('Detail', {
            testId: e,
          });
    };
    
    useEffect(() => {
        getTest();
    }, []);


    return (
        
        <ImageBackground style={styles.bg} source={require('../../../assets/images/bgcate.png')}>
            
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.back} source={require('../../../assets/images/back.png')}></Image>
            </TouchableOpacity>
            <View style={styles.container1}>
                <View style={styles.text}><Text style={styles.title}>🧾 Bộ đề kiểm tra của {userInfo.name}</Text></View>

                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={tests}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <View style={styles.score}>
                                <View style={styles.left}>
                                <Text style={styles.name}>📋 {item.name}</Text>
                                </View>
                                <View style={styles.rigth}>
                                <TouchableOpacity 
                                onPress={() => this._handleSubmit(item.id)} 
                                        style={styles.button}>            
                                    <Text style={styles.btn}>✏️</Text>
                                </TouchableOpacity>
                                <Text style={styles.time}>{formatTime(item.created_at)}</Text>
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
export default ListTestTeacher;
const styles = StyleSheet.create({
    left:{
        width: 220,
        height: 110
    },

    time:{
        color:'gray',
        marginEnd: -5,
        fontSize: 13    
    },
    rigth:{
        height: 100,
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 10,
    },
  
    container1:{
        height:590,
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
        width: 300,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#0280BD",
        borderRadius: 15,
        marginTop: -25,
        alignItems: "center",

    },
    title: {
        fontSize: 22,
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
        width: 335,
        height: 120,
        paddingVertical: 10,
        backgroundColor: "#fff",
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: "#AECCF2",
        flexDirection:'row',
        justifyContent:'space-between',
    },
    
    name: {
        color: "#fff",
        fontSize: 24,
    },
    button:{
        height:40,
        width: 40,
        justifyContent: 'center',
        backgroundColor:'#fff',
        marginEnd:-10,
        alignItems: 'center',
        borderRadius:10,          
    },
    btn:{
        fontSize:25,
    },

}
);
