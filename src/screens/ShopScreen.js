import React, { useContext, useState,useEffect } from "react";
import { StyleSheet, Text,Pressable, ActivityIndicator,Modal ,ScrollView,  TextInput,FlatList, Animated, View, TouchableOpacity, Button, ImageBackground } from "react-native";
import { AuthContext } from '../context/AuthContext';
import img1 from '../../assets/images/category-1.png';
import img2 from '../../assets/images/category-2.png';
import img3 from '../../assets/images/category-3.png';
import img4 from '../../assets/images/category-4.png';
import img5 from '../../assets/images/category-5.png';
import img6 from '../../assets/images/category-6.png';
import img7 from '../../assets/images/category-7.png';
import imgback from '../../assets/images/img_back.png';
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
const tier1 = "#a9d6e5";
const tier2 = "#b7e4c7";
const tier3 = "#61a5c2";
const tier4 = "#edafb8";
const tier5 = "#f9eae1";
import { BASE_URL } from "../config";
import { Image } from 'expo-image';
const blurhash ='|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const LevelScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const tiers = [null,tier1, tier2, tier3, tier4, tier5];
    let { userInfo } = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);
    let [data, setData] = useState();
    let [user, setDataUser] = useState();
    let [itemId, setItemId] = useState();
    let [itemName, setItemName] = useState();
    let [itemDescription, setItemDescription] = useState();
    let [itemValue, setItemValue] = useState();
    let [itemPrice, setItemPrice] = useState();
    let [itemImage, setItemImage] = useState();
    let scoretemp = userInfo.score;
    let cointemp = userInfo.coin;
    let level;
    if(user){
      scoretemp = user.score;
      cointemp = user.coin
      level = Math.floor(userInfo / 10);
    }
    level = Math.floor(scoretemp / 10);
    let width = 0;
    if (scoretemp % 10 == 0) {
        width = 10;
    } else {
        width = scoretemp % 10;
    }
    let getUser = async () => {
      try {
        let response = await fetch(`${BASE_URL}/user/${userInfo.id}`);
        let json = await response.json();
        setDataUser(json.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    let getItems = async () => {
      try {
        let response = await fetch(`${BASE_URL}/bag/${userInfo.id}`);
        let json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    _userItem = async (id,name,description,value,price,image) => {
      setModalVisible(true);
      setItemId(id);
      setItemName(name);
      setItemDescription(description);
      setItemValue(value);
      setItemPrice(price);
      setItemImage(image);
    };
    _deleteItem = async (id,value) => {
      fetch(`${BASE_URL}/bag/delete/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }});

        fetch(`${BASE_URL}/addscore/${userInfo.id}`, {
          method: 'PUT',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              score: value,
          })});
          navigation.navigate("Level");
          getItems();
          getUser();
          setModalVisible(false);
    };
    _reload = async () => {
      navigation.navigate("Level");
      getItems();
      getUser();
    };

    useEffect(() => {
        getItems();
        getUser();
      }, []);

    return (
        <View style={styles.container}>
          {/* POPUP */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <View style={styles.header_model}>
                            <Text style={styles.header_model_text}>{itemName}</Text>
                            <Pressable
                              style={[styles.button, styles.buttonClose]}
                              onPress={() => setModalVisible(!modalVisible)}>
                              <Image style={styles.header_model_img} source={imgclose}></Image>
                            </Pressable>
                          </View>
                          <View style={styles.item_model}>
                            <Image placeholder={blurhash} transition={10} style={styles.item_model_img} source={itemImage} ></Image>
                            <Text style={styles.item_model_text}> +{itemValue} EXP</Text>
                          </View>
                          <TouchableOpacity onPress={() => this._deleteItem(itemId,itemValue,itemPrice)} style={styles.model_btn} >
                            <Text style={styles.model_btn_text}>sử dụng</Text>
                        </TouchableOpacity>
                        </View>
                      </View>
                    </Modal>
             {/* POPUP */}
            <View style={styles.header}>
            <TouchableOpacity style={styles.header_left} onPress={() => navigation.navigate("Menu")}>
                <Image style={styles.header_left_img} source={imgback} />
            </TouchableOpacity>
            <View style={styles.header_right_box}>
              <TouchableOpacity style={styles.header_right} onPress={() => navigation.navigate("Shop")}>
                  <Image style={styles.header_left_img} source={imgcart} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this._reload()}>
                  <Image style={styles.header_left_img} source={imghome} />
              </TouchableOpacity>
            </View>
            </View>
            <View style={styles.banner}>
                <ImageBackground resizeMode="contain" style={styles.banner_img_bg} source={imgbg} >
                    <Image style={styles.banner_img} source={imgcatwhite} ></Image>
                </ImageBackground>
            </View>
            <View style={styles.content}>
                <View style={styles.content_top}>
                    <ImageBackground resizeMode="contain" style={styles.content_top_img_bg} source={imgRectangle2} >
                        <ImageBackground resizeMode="contain" style={styles.content_top_img} source={imgRectangle5}>
                            <Animated.View style={{
                                width: width * 24.8,
                                backgroundColor: color_background_blue_1,
                                height: 24.5,
                                top: -2,
                                borderRadius: 4,
                                }}>
                            </Animated.View>
                            <View style={styles.content_top_text}>
                                <Text style={styles.content_top_text_1}>
                                    {scoretemp}
                                </Text>
                                <Image style={styles.content_top_text_img} source={imgvectorcat} ></Image>
                            </View>
                        </ImageBackground>
                    </ImageBackground>
                </View>
                <View style={styles.content_center}>
                    <Text style={styles.content_center_text_1}>
                        {userInfo.name}
                    </Text>
                    <View style={styles.content_center_text_2}>
                        <Text style={styles.content_center_text_s}>{cointemp}</Text>
                        <Image style={styles.content_center_text_img} source={imgcoin} ></Image>
                    </View>
                    <Text style={styles.content_center_text_3}>
                        Level {level}
                    </Text>
                </View>
                <View style={styles.content_bottom}>
                    <View style={styles.content_bottom_header}>
                        <Text style={styles.content_bottom_header_text_1}>Túi của bạn</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Bag")}>
                            <Text style={styles.content_bottom_header_text_2}>Xem cả</Text>
                        </TouchableOpacity>
                    </View>
                    {isLoading ? (
                        <ActivityIndicator />
                        ) : (
                        <View style={styles.content_bottom_list_view}>
                        <FlatList
                            contentContainerStyle={styles.content_bottom_list}
                            data={data}
                            keyExtractor={({ id }) => id}
                            renderItem={({ item }) => (<>
                            <TouchableOpacity
                            onPress={() =>_userItem(item.id,item.name,item.description,item.value,item.price,item.image)}
                            style={{
                                width: 100,
                                height: 100,
                                padding: 10,
                                margin: 3,
                                borderRadius: 24,
                                alignItems:'center',
                                backgroundColor: tiers[item.value]   
                            }}>
                               <Image placeholder={blurhash} transition={10} style={styles.content_bottom_item_img} source={item.image} ></Image>
                               <Text style={styles.content_bottom_item_text}> {item.name}</Text>
                            </TouchableOpacity>
                            </>)}
                        />
                        </View>
                        )}  
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    centeredView:{
      flex: 1,
      backgroundColor: color_background_gray,
      justifyContent:'center',
      alignItems:'center'
    },
    modalView:{
      backgroundColor:color_background_white,
      width: 250,
      padding: 20,
      borderRadius: 24
    },
    header_model:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom: 14
    },
    header_model_text:{
      fontSize: 19,
      fontWeight:'400',
      color:color_text_black
    },
    header_model_img:{
      width: 28,
      height: 28,
      objectFit: 'contain',
      backgroundColor:color_background_gray_1,
      borderRadius: 999
    },
    item_model:{
      alignItems:'center'
    },
    item_model_text:{
      color:color_background_green_2,
      fontSize: 16
    },
    item_model_img:{
      width: 70,
      height: 70,
      objectFit: 'contain'
    },
    model_btn:{
      marginTop: 20,
      backgroundColor: color_background_blue_3,
      borderRadius: 999,
      alignItems:'center',
      justifyContent:'center'
    },
    model_btn_text:{
      color:color_background_white,
      fontSize: 17,
      paddingVertical:12,
      fontWeight:'500',
      textTransform:'uppercase'
    },
    container: {
        flex:1,
        height: '100vh',
        paddingHorizontal:20,
        backgroundColor:color_background_green_1,
        alignItems: 'center'
      },
      header: {
        width: '100%',
        marginTop: 27,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      },
      header_left: {
        height: 24,
        width: 24,
        zIndex: 10
      },
      header_left_img: {
        marginTop: 5,
        height: 33,
        width: 33,
      },
      header_right_box:{
        flexDirection:'row',
        justifyContent:'center',
        gap: 7,
        alignItems:'center',
      },
      header_right:{
        width: 35,
        height: 35,
        marginBottom: 2
      },
      banner:{
        justifyContent: 'center',
        alignItems:'center',
        height: 260
      },
      banner_img_bg:{
        justifyContent: 'center',
        alignItems:'center',
        width: 230,
        height: 230,
        marginBottom: 10,
      },
      banner_img:{
        width: 320,
        height: 320,
        marginBottom: 20,
        marginLeft: '-30%',
      },
      content:{
        backgroundColor:color_background_white,
        width: 412,
        height: 500,
        borderRadius: 50
      },
      content_top:{
        height: 100,
        alignItems:'center',
        justifyContent:'center'
      },
      content_top_img_bg:{
        width: 600,
        height: 52,
        alignItems:'center',
        justifyContent:'center'
      },
      content_top_img:{
        width: 250,
        height: 30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        position:'relative'
      },
      content_top_text:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap: 5,
        top: 2,
        left: 110,
      },
      content_top_text_1:{
        fontSize: 16,
        fontWeight: '700',
        color: color_background_blue_3
      },
      content_top_text_img:{
        width: 15,
        height: 15,
        objectFit: 'contain',
      },

      content_center:{
        backgroundColor: color_background_blue_3,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        marginHorizontal: 35
      },
      content_center_text_1:{
        color:color_background_white,
        textTransform:'uppercase',
        fontWeight:'600',
        fontSize: 14
      },
      content_center_text_2:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        gap: 3
      },
      content_center_text_s:{
        color:color_background_white,
        textTransform:'uppercase',
        fontWeight:'700',
        fontSize: 17,
      },
      content_center_text_3:{
        color:color_background_white,
        textTransform:'uppercase',
        fontWeight:'700',
        fontSize: 14
      },
      content_center_text_img:{
        objectFit:'contain',
        width: 20,
        height: 20,
      },
      content_bottom:{
        padding: 30,
        paddingVertical: 20,
        height: 200
      },
      content_bottom_header:{
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom: 5,
      },
      content_bottom_header_text_1:{
        color: color_text_black,
        textTransform:'uppercase',
        fontSize: 13,
        fontWeight: '500'
      },
      content_bottom_header_text_2:{
        color: color_background_blue_3
      },
      content_bottom_list_view:{
        flexDirection:'row',
        height: 175,
        width: 360,
        overflow:'scroll'
      },
      content_bottom_list:{
        flexDirection:'row',
        justifyContent:'flex-start',
        gap: 20,
        flexWrap: 'wrap'
      },
      content_bottom_item_img:{
        width: 60,
        height: 60,
        objectFit:'contain'
      },

      content_bottom_item_text:{
        color:color_background_white,
        fontWeight:'400'
      }
      
});
export default LevelScreen;