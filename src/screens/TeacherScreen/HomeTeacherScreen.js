import React, { useContext, useState, useEffect } from "react";
import { Text, View,ActivityIndicator, Button, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from "../../config";

const HomeTeacherScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const {userInfo, logout } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const id_user = userInfo.id;
    const getLessons = async () => {
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


    _handleSubmit = async (e) => {

        navigation.navigate('Detail', {
            testId: e,
        });
    };

    useEffect(() => {
        getLessons();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('MenuTeacher')}>
                    <Image style={styles.menu} source={require('../../../assets/images/menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image style={styles.menu} source={require('../../../assets/images/score.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.banner}>
                <Image style={styles.imgbanner} source={require('../../../assets/images/login_img.png')} />
            </View>
            <View style={styles.context}>
                <View style={styles.listbtn}>
                    <View style={styles.itembtn}>
                        <Text style={styles.itemtext}>Bộ đề</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate('HistoryTeacher')}>
                            <Text style={styles.itemtext} >Lịch sử</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate('Create')}>
                            <Text style={styles.itemtext} >Tạo đề</Text>
                        </TouchableOpacity>
                    </View>
                
                </View>

                {isLoading ? (
                    <ActivityIndicator />
                ) : (

                <View style={styles.listlesstion}>
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <View style={styles.itemlesson}>
                                <View style={styles.content}>
                                    <Text style={styles.name}>📋 {item.name}</Text>
                                    <Text style={styles.description}>{item.description}</Text>
                                </View>
                                <TouchableOpacity style={styles.btn} onPress={() => this._handleSubmit(item.id)} >
                                    <Text style={styles.textbtn}>✏️</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                    
                </View>
            )}
           </View>
        </View>
)};

const styles = StyleSheet.create({
    textbtn:{
        fontSize: 20,
    },
    btn:{
      backgroundColor:'white',
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 12,
      marginTop: -4,
      marginRight: -5
    },
    name:{
        color:"#fff",
        fontWeight:"bold",
        fontSize: 18
    },
    description:{
        width: 220,
        height: 94,
        fontSize: 16,
        color: 'white'
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center'
    },
    header: {
        marginTop:10,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        height: 70,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    banner: {
        width: '100%',
        height: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    context: {
        width: '100%',
        height: '55%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start'
    },
    menu: {
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgbanner: {
        width: 200,
        height: 200,
        objectFit: 'contain',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listbtn:
    {
        width: 450,
        height: 50,
        gap: 10,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itembtn:
    {
        width: 115,
        height: 90,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemtext:{
        fontSize: 18,
    },
    listlesstion:
    {
        width: 320,
        height: 300,
    },
    itemlesson:
    {
        flexDirection: 'row',
        borderRadius: 20,
        height:150,
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10,
        backgroundColor: '#62C7F3',
        padding: 15,
    },
    content:{
        gap:5,
    }
})
export default HomeTeacherScreen;