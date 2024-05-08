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
import imgavtcart from '../../assets/images/img-cat-white.png';
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

const ShopScreen = ({ navigation }) => {
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
    let cointemp = userInfo.coin;
    if(user){
      cointemp = user.coin
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
      navigation.navigate("Home");
      getItems();
      getUser();
    };

    useEffect(() => {
        getItems();
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
              <TouchableOpacity style={styles.header_right} onPress={() => navigation.navigate("Bag")}>
                  <Image style={styles.header_left_img} source={imgcart} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this._reload()}>
                  <Image style={styles.header_left_img} source={imghome} />
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.banner}>
          <View style={styles.banner_top}>
            <Image style={styles.banner_top_img} source={imgavtcart} />
          </View>
          <View style={styles.banner_bottom}>
            <Text style={styles.banner_bottom_text_1}>
              Dang Phuong Tay
            </Text>
            <View style={styles.banner_bottom_text_2}>
              <Text>{cointemp}</Text>
              <Image style={styles.content_center_text_img} source={imgcoin} ></Image>
            </View>
            <Text style={styles.banner_bottom_text_3}>
              {data?.length} Vật phẩm
            </Text>
          </View>
        </View>
        <View style={styles.body}>
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
                         width: 372,
                         height: 78,
                         padding: 12,
                         borderRadius: 22,
                         alignItems:'flex-start',
                         flexDirection:'row',
                         backgroundColor: color_background,
                         borderTopLeftRadius: 2,
                      }}>
                      <Image placeholder={blurhash} transition={10} style={styles.content_bottom_item_img} source={item.image} ></Image>
                      <View style={styles.content_bottom_item_text}>
                        <View style={styles.content_bottom_item_text_left}>
                          <Text style={styles.content_bottom_item_text_1}> {item.name}</Text>
                          <Text style={styles.content_bottom_item_text_2}> {item.description}</Text>
                        </View>
                        <View style={styles.content_bottom_item_text_right}>
                          <Text style={styles.content_bottom_item_text_3}>+ {item.value} EXP</Text>
                        </View>
                      </View>
                     </TouchableOpacity>
                    </>)}
                  />
              </View>
            )}      
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
    backgroundColor: color_background_white,
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
    marginTop:15,
    width: '100%',
    padding: 20,
    borderRadius: 24,
    backgroundColor:color_background_green_1,
    flexDirection:'row',
    gap: 10,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
  banner_top_img:{
    width: 95,
    height: 79,
    objectFit: 'contain',
  },
  banner_bottom:{
    marginLeft: 7,
    gap: 6
  },
  banner_bottom_text_1:{
    color:color_text_black,
    fontSize: 16,
    fontWeight: '500'
  },
  banner_bottom_text_2:{
    color:color_text_black,
    flexDirection:'row',
    gap: 5,
    fontSize: 14,
    fontWeight: '400'
  },
  content_center_text_img:{
    objectFit:'contain',
    width: 20,
    height: 20,
  },
  banner_bottom_text_3:{
    color:color_text_black,
    fontSize: 15,
    fontWeight: '400',
    textTransform: 'lowercase'
  },
  body:{
    marginTop: 10,
    width: '100%',
    height: 475
  },
  content_bottom_list_view:{
    height: 475,
    flexDirection:'row',
  },
  content_bottom_list:{
    justifyContent:'space-between',
    height: 475,
    flexDirection:'row',
    flexWrap:'wrap',
    gap: 10
  },
  content_bottom_item_img:{
    width: 50,
    height: 50,
    objectFit:'contain',
  },
  content_bottom_item_text:{
    marginLeft:10,
    flexDirection:'row',
    justifyContent:'space-between',
    width: '81%',
    alignItems:'center',
    height: 60
  },
  content_bottom_item_text_left:{
    gap: 6,
    marginTop: -7
  },
  content_bottom_item_text_1:{
    fontSize: 15,
    color:color_text_black,
    fontWeight: '500'
  },
  content_bottom_item_text_2:{
    fontSize: 14,
    color:color_text_black
  },
  content_bottom_item_text_right:{
    width: 42,
    height: 42,
    borderRadius: 999,
    alignItems:'center',
    justifyContent:'center',
    borderColor: color_background_green_1,
    borderWidth: 2,
    padding: 2,
    marginTop:-7
  },
  content_bottom_item_text_3:{
    color:color_background_green_2,
    fontSize: 10,
    fontWeight: '600',
    textAlign:'center'
  }
});
export default ShopScreen;