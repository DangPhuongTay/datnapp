import React, { useContext, useState, useEffect } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from "../config";

const HomeSreen = ({ navigation }) => {

    const { isLoading, userInfo, logout } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const getLessons = async () => {
        try {
            const response = await fetch(`${BASE_URL}/lession/all`);
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    _handleSubmit = async (e) => {

        navigation.navigate('Quiz', {
            itemId: e,
        });
    };

    useEffect(() => {
        getLessons();
    }, []);
    return (
        <View style={styles.container}>
        
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image style={styles.menu} source={require('../../assets/images/score.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image style={styles.menu} source={require('../../assets/images/score.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.banner}>
                <Image style={styles.imgbanner} source={require('../../assets/images/login_img.png')} />
            </View>
            <View style={styles.context}>
                <View style={styles.listbtn}>
                    <View style={styles.itembtn}>
                        <Text>Bài học</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate('Listgame')}>
                            <Text>Trò chơi</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate('Rank')}>
                            <Text>Xếp hạng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate('Create')}>
                            <Text>Tạo bài</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity  style={styles.itembtn} onPress={() => navigation.navigate('ListTest')}>
                            <Text> Thi thử </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.listlesstion}>
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <View style={styles.itemlesson}>
                                <View>
                                    <Text >{item.name}</Text>
                                    <Text >{item.description}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this._handleSubmit(item.id)} >
                                    <Text>Chọn</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </View>


        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center'
    },
    header: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        height: 60,
        backgroundColor: 'red',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    banner: {
        width: '100%',
        height: '40%',
        backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    context: {
        width: '100%',
        height: '55%',
        backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start'
    },
    menu: {
        width: 30,
        height: 30,
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
        width: 400,
        height: 50,
        gap: 10,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itembtn:
    {
        width: 100,
        height: 50,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listlesstion:
    {
        width: 320,
        height: 300,
    },
    itemlesson:
    {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10,
        backgroundColor: 'pink',
        padding: 10,
    }
})
export default HomeSreen;