import React, { useContext, useState, useEffect } from "react";
import { Text, View, ActivityIndicator, Button, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from "../config";
import medal1 from '../../assets/images/item6_home_list.png';
import medal2 from '../../assets/images/item7_home_list.png';
import medal3 from '../../assets/images/item8_home_list.png';
import medal4 from '../../assets/images/item9_home_list.png';
const HomeSreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const { userInfo, logout } = useContext(AuthContext);
    const [data, setData] = useState([]);


    const imgs = [medal1, medal2, medal3, medal4];
    let rank = 0;
    let nubicon = 0;
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
                    <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image style={styles.menu} source={require('../../assets/images/info.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.infoUser}> Chào {userInfo.name},</Text>
            <Text style={styles.desUser}>Có bài học mới cho bạn nè!</Text>
            <View style={styles.banner}>
                <Image style={styles.imgbanner} source={require('../../assets/images/item_home_banner.png')} />
                <View style={styles.introBanner}>
                    <Text style={styles.desBanner}>We may be out of sight… But never out of mind…</Text>
                    <TouchableOpacity style={styles.btnBanner} onPress={() => navigation.navigate('Lesson')}>
                        <Text style={styles.textBanner}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.context}>
                <View style={styles.listbtn}>
                    <View style={styles.itembtn}>
                        <Text style={styles.itemtext} >Bài học</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.itembtn1} onPress={() => navigation.navigate('Listgame')}>
                            <Text style={styles.itemtext} >Trò chơi</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.itembtn2} onPress={() => navigation.navigate('Rank')}>
                            <Text style={styles.itemtext} >Xếp hạng</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                {isLoading ? (
                    <ActivityIndicator />
                ) : (

                    <View style={styles.listlesstion}>
                        <FlatList contentContainerStyle={styles.list}
                            data={data}
                            keyExtractor={({ id }) => id}
                            renderItem={({ item }) => (
                                <View style={styles.itemlesson}>
                                    <View style={styles.content}>
                                        <Text style={styles.name}>📋 {item.name}</Text>
                                        {/* <Text style={styles.description}>{item.description}</Text> */}
                                    </View>
                                    <View style={styles.btn_bottom}>
                                        <TouchableOpacity style={styles.btn} onPress={() => this._handleSubmit(item.id)} >
                                            <Text style={styles.textbtn}>Chọn</Text>
                                        </TouchableOpacity>
                                        <Image style={styles.item_img} source={imgs[nubicon++]}></Image>
                                    </View>

                                </View>
                            )}
                        />

                    </View>
                )}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'white',
        width: 70,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginTop: 25,
        marginRight: -5
    },

    description: {
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
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        height: 70,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    infoUser: {
        fontSize: 28,
        fontWeight: '800',
        marginRight: '50%'
    },
    desUser: {
        fontSize: 20,
        fontWeight: '400',
        marginRight: '22%'
    },
    banner: {
        width: '75%',
        height: '15%',
        display: 'flex',
        alignItems: 'center',

        backgroundColor: '#C0EDFC',
        borderRadius: 12,
        marginTop: 40,
        flexDirection: 'row',
        marginBottom: 20
    },
    introBanner: {
        marginRight: '40%',

    },
    desBanner: {
        fontSize: 16,

    },

    btnBanner: {
        display: 'flex',
        marginTop: 20,
        marginLeft: 100,
        width: 80,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'


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
        width: 150,
        height: 150,
        objectFit: 'contain',
        display: 'flex',
        marginLeft: '-10%',
        marginBottom: 30

    },
    list: {
        width: 320,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: 'space-between',
    },
    listbtn:
    {
        width: 450,
        height: 50,
        gap: 10,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    itembtn:
    {
        width: 100,
        height: 40,
        backgroundColor: '#62C7F3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    itembtn1: {
        width: 100,
        height: 40,
        backgroundColor: '#B8E1FF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    itembtn2: {
        width: 100,
        height: 40,
        backgroundColor: '#CED1E6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    itemtext: {
        fontSize: 18,

    },
    listlesstion:
    {
        paddingHorizontal: 20,
        width: 360,
        paddingVertical: 15,
        backgroundColor: "#fff",
        borderRadius: 15,
        height: 250,
        justifyContent: 'space-between',
     

    },

    itemlesson:
    {

        borderRadius: 16,
        height: 120,
        width: 140,

        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#62C7F3',
        marginRight: 10

    },
    content: {
        gap: 5,
        width: 120,
        height: 30

    },
    item_img: {
        width: 50,
        height: 50,
        marginLeft: -10,
        marginTop: 50

    },
    name: {
        color: '#000',
        fontWeight: '600',
        marginTop: -10,
        height: 65
      
    },
    description: {
        color: '#000',
        backgroundColor:'red',
        height:40
    },
    btn_bottom: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: -52
    },
    btn: {
        width: 60,
        height: 25,
        backgroundColor: '#62C7F3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 60,
        marginRight: 20
    }

})
export default HomeSreen;