import React, { useContext, useState, useEffect } from "react";
import {ImageBackground, Text, View, ActivityIndicator, Button, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from "../config";
import img5 from '../../assets/images/category-1.png';
import img3 from '../../assets/images/category-2.png';
import img2 from '../../assets/images/category-3.png';
import img6 from '../../assets/images/category-4.png';
import img1 from '../../assets/images/category-5.png';
import img4 from '../../assets/images/category-6.png';
import img7 from '../../assets/images/category-7.png';
import imgback from '../../assets/images/img_menu.png';
import imgnof from '../../assets/images/img-nof.png';
import imgnotitem from '../../assets/images/img-not-item-1.gif';
import imgnotitembg from '../../assets/images/img-not-item-bg.png';
import imgbg1 from '../../assets/images/img-not-item-bg-1.png';
import imgbg from '../../assets/images/img-bg-1.png';
import imgcatwhite from '../../assets/images/img-cat-white-1.gif';
import imgRectangle6 from '../../assets/images/Rectangle6.png';
import imgRectangle5 from '../../assets/images/Rectangle5.png';
import imgRectangle2 from '../../assets/images/Rectangle2.png';
import imgvectorcat from '../../assets/images/Vectorcat.png';
import imgcrown from '../../assets/images/imgcrown.png';
import imgcoin from '../../assets/images/coin.png';
import imgclose from '../../assets/images/img-close.png';
import imghome from '../../assets/images/img_home.png';
import imgmenu from '../../assets/images/img_menu.png';
import imgcart from '../../assets/images/img_cart.png';
import imgaddpet from '../../assets/images/img_add_pet.png';
import imgpet1 from '../../assets/images/img_pet_1.png';
import imgpet2 from '../../assets/images/img_pet_2.png';
import imgpet3 from '../../assets/images/img_pet_3.png';
import imgpet4 from '../../assets/images/img_pet_4.png';
const color_text_black = "#221E1B";
const color_text_yellow = "#F3AE29";
const color_background = "#f3f4df";
const color_background_white = "#FFFFFF";
const color_background_blue_3 = "#398AFF";
const color_background_blue_1 = "#81D9FF";
const color_background_blue_2 = "#D0EFFF";
const color_background_green_1 = "#7DF4A8";
const color_background_green_2 = "#008000";
const color_background_gray = "rgba(0, 0, 0, 0.21)";
const color_background_gray_1 = "#edede9";
const color_background_red = "#e01e37";
const color1 = "#E8F7FE";
const color2 = "#EAF9F2";
const color3 = "#F0F3FE";
const color4 = "#FAF2EB";
const color5 = "#71A8B6";
const HomeSreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const { userInfo, logout } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [datatest, setDataTest] = useState([]);
    const imgs = [imgaddpet, imgpet1, imgpet2, imgpet3, imgpet4];
    const colors = [color1, color2, color3, color4, color5];
    const items = [img1, img2, img3, img4, img5, img6, img7];
    let nubimg = 0;
    let nubcolor = 0;
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
    const getTests = async () => {
        try {
            const response = await fetch(`${BASE_URL}/test/all`);
            const json = await response.json();
            setDataTest(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    _handleSubmit = async (e, n) => {
        navigation.navigate('Quiz', {
            itemId: e,
            itemname: n
        });
    };

    useEffect(() => {
        getLessons();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.header_left} onPress={() => navigation.navigate("Menu")}>
                    <Image style={styles.header_left_img} source={imgback} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.header_right} onPress={() => navigation.navigate("Bag")}>
                    <Image style={styles.header_right_img} source={imgcart} />
                </TouchableOpacity>
            </View>
            <View style={styles.banner}>
                <View style={styles.banner_header}>
                    <Text style={styles.banner_header_text_1}>
                        Thu cưng
                    </Text>
                    <Text style={styles.banner_header_text_2}>
                        Khám phá
                    </Text>
                </View>
                <View style={styles.banner_list}>
                    <TouchableOpacity style={styles.content_bottom_item}>
                        <Image style={styles.content_bottom_item_img} source={imgs[0]} ></Image>
                        <Text style={styles.content_bottom_item_text}>Thêm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.content_bottom_item}>
                        <Image style={styles.content_bottom_item_img} source={imgs[1]} ></Image>
                        <Text style={styles.content_bottom_item_text}>Gogo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.content_bottom_item}>
                        <Image style={styles.content_bottom_item_img} source={imgs[2]} ></Image>
                        <Text style={styles.content_bottom_item_text}>Meoo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.content_bottom_item}>
                        <Image style={styles.content_bottom_item_img} source={imgs[3]} ></Image>
                        <Text style={styles.content_bottom_item_text}>Ooo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.content_bottom_item}>
                        <Image style={styles.content_bottom_item_img} source={imgs[4]} ></Image>
                        <Text style={styles.content_bottom_item_text}>Chis</Text>
                    </TouchableOpacity>
                </View>    
            </View>
            {isLoading ? (
             <ActivityIndicator />
             ) : (
        <ScrollView style={styles.body_box}>
            <View style={styles.body}>
                <View style={styles.banner_header}>
                    <Text style={styles.banner_header_text_1}>
                        Chủ đề
                    </Text>
                    <Text style={styles.banner_header_text_2}>
                        Khám phá
                    </Text>
                </View>
                <FlatList
                    contentContainerStyle={styles.body_list}
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => this._handleSubmit(item.id,item.name)}
                        style={{
                        width: 170,
                        height: 170,
                        backgroundColor: colors[nubcolor++],
                        borderRadius: 20,
                        justifyContent:'center',
                        alignItems:'center',
                        gap: 5
                    }}>
                        <Image style={styles.body_item_img} source={items[nubimg++]}></Image>
                        <Text style={styles.body_item_text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                />
            </View>
            <View style={styles.body}>
              
                <View style={styles.banner_header}>
                    <Text style={styles.banner_header_text_1}>
                        Kiểm tra
                    </Text>
                    <Text style={styles.banner_header_text_2}>
                        Khám phá
                    </Text>
                </View>
                {datatest.length > 0 ? (
                <FlatList
                    contentContainerStyle={styles.body_list}
                    data={datatest}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => this._handleSubmit(item.id,item.name)}
                        style={{
                        width: 170,
                        height: 170,
                        backgroundColor: colors[nubcolor++],
                        borderRadius: 20,
                        justifyContent:'center',
                        alignItems:'center',
                        gap: 5
                    }}>
                        <Image style={styles.body_item_img} source={items[nubimg++]}></Image>
                        <Text style={styles.body_item_text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                />
            ) : (
                <View style={styles.not_item}>
                <ImageBackground source={imgnotitembg} style={styles.not_item_img_bg} >
                    <Image style={styles.not_item_img} source={imgnotitem} />
                </ImageBackground>
                <Text style={styles.not_item_text}>
                      chưa có bài kiểm tra nào!
                    </Text>
              </View>
            )}
            </View>
        </ScrollView>
        )}
    </View>
    )
};

const styles = StyleSheet.create({
    container:{
        padding:15,
        paddingTop: 25,
        height:'100%',
        backgroundColor:color_background
    },
    header:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    header_right:{
        width: 32,
        height: 32
    },
    header_left:{
        width: 30,
        height: 30
    },
    header_right_img:{
        width: 32,
        height: 32
    },
    header_left_img:{
        width: 32,
        height: 32
    },
    banner:{
        backgroundColor:color_background_white,
        padding: 15,
        borderRadius: 22,
        marginTop: 10,
    },
    banner_header:{
        flexDirection:'row',
        width: '100%',
        justifyContent:'space-between',
        paddingBottom: 10,
        paddingTop: 5,
        alignItems:'flex-end'
    },
    banner_header_text_1:{
        fontSize: 17,
        fontWeight:'500',
        color:color_text_black
    },
    banner_header_text_2:{
        fontSize: 14,
        fontWeight:'500',
        color:color_background_gray
    },
    banner_list:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    content_bottom_item:{
        alignItems:'center',
        justifyContent:'space-between',
    },
    content_bottom_item_img:{
 
    },
    content_bottom_item_text:{
        color:color_text_black,
        fontWeight:'500'
    },
    body_box:{
        width: '100%',
        marginTop: 15,
    },
    body:{
        marginBottom: 15,
        padding: 15,
        backgroundColor:color_background_white,
        borderRadius: 22,
    },
    body_list:{
        flexDirection:'row',
        flexWrap: 'wrap',
        gap: 10
    },
    body_item:{
        width: 170,
        height: 170,
        backgroundColor:'red',
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
        gap: 5
    },
    body_item_text:{
        width: 100,
        textAlign: 'center',
        lineHeight: 18,
        color:color_text_black,
        fontWeight: '400'
    },
    body_item_img:{
        width: 60,
        height: 60
    },
    not_item:{
        width:'100%',
        height: 180,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: color_background_white,
        borderRadius: 24,
        borderTopLeftRadius: 2
      },
      not_item_img:{
        width: 120,
        height: 120,
        objectFit: 'contain',
        marginBottom: -10
      },
      not_item_img_bg:{
        width: 100,
        height: 100,
        objectFit: 'contain',
        justifyContent: 'flex-end',
        alignItems:'center'
      },
      not_item_text:{
        marginTop: 10,
        textTransform:'uppercase',
        color: color_text_black,
        fontWeight:'500',
        fontSize: 12
      }
})
export default HomeSreen;