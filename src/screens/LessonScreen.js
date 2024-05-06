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
  ScrollView,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import img1 from '../../assets/images/category-1.png';
import img2 from '../../assets/images/category-2.png';
import img3 from '../../assets/images/category-3.png';
import img4 from '../../assets/images/category-4.png';
import img5 from '../../assets/images/category-5.png';
import img6 from '../../assets/images/category-6.png';
import img7 from '../../assets/images/category-7.png';
import imgback from '../../assets/images/img-back.png';
import imgnof from '../../assets/images/img-nof.png';
import imgnotitem from '../../assets/images/img-not-item-1.gif';
import imgnotitembg from '../../assets/images/img-not-item-bg-1.png';
import imgsandwich from '../../assets/images/sandwich.png';
const color_text_black = "#221E1B";
const color_text_yellow = "#F3AE29";
const color_background = "#f3f4df";
const color_background_white = "#FFFFFF";
const color_background_blue_1 = "#81D9FF";
const color_background_blue_2 = "#D0EFFF";
import { BASE_URL } from "../config";
const LessonScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const imgs = [img1, img2, img3, img4, img5, img6, img7];
  let nubimg = 1;
  const getMovies = async () => {
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
    navigation.navigate("Quiz", {
      itemId: e,
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.header_left} onPress={() => navigation.navigate("Menu")}>
          <Image style={styles.header_left_img} source={imgback} />
        </TouchableOpacity>
        <View style={styles.header_center}>
          <Text style={styles.header_center_text}>
            cùng học thôi nào !
          </Text>
        </View>
        <View style={styles.header_right}>
          <Image style={styles.header_left_img} source={imgnof} />
        </View>
      </View>
      {isLoading ? (
          <ActivityIndicator />
        ) : (
        data.length > 0 ? (
      <View style={styles.content}>
      <FlatList
              contentContainerStyle={styles.list}
              data={data}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.item} onPress={() => this._handleSubmit(item.id)}>
                  <View style={styles.item_left}>
                    <Image style={styles.item_left_img} source={imgs[nubimg++]} />
                    <View style={styles.item_left_text}>
                      <Text style={styles.item_left_text_top}>
                        {item.name}
                      </Text>
                      <Text style={styles.item_left_text_bottom}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.item_right}>
                      <Text style={styles.item_right_text}>
                        {item.type}
                      </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
      </View>
      ) : ( 
        <View style={styles.not_item}>
          <ImageBackground source={imgnotitembg} style={styles.not_item_img_bg} >
              <Image style={styles.not_item_img} source={imgnotitem} />
          </ImageBackground>
          <Text style={styles.not_item_text}>
                chưa có bài học nào!
              </Text>
        </View>
      ))}
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    height: '100vh',
    paddingHorizontal:20,
    backgroundColor:color_background,
  },
  header: {
    width: '100%',
    paddingVertical: 25,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  header_left: {

  },
  header_left_img: {
    height: 24,
    width: 24,
  },
  header_center: {
 
  },
  header_center_text:{
    color:color_text_black,
    fontSize:16,
    textTransform:'uppercase',
    fontWeight:'400',
    backgroundColor:color_background_white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 18,
    borderTopLeftRadius: 2,
    borderBottomRightRadius:2
  },
  header_right: {

  },
  content: {

  },
  list: {
    marginTop:10,
    gap: 12,
    height:'93%',
  },
  item: {
    padding: 16,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:color_background_white,
    borderTopEndRadius:24,
    borderBottomRightRadius:24,
    borderTopStartRadius: 2,
    borderBottomLeftRadius: 24,
  },
  item_left: {
    flexDirection:'row',
    justifyContent:'space-between',
    gap: 10
  },
  item_left_text:{
    justifyContent:'space-between'
  },
  item_left_img: {
    width:40,
    height:40,
    objectFit:'contain'
  },
  item_left_text_top:{
    color:color_text_black,
    fontWeight: '500',
    fontSize:14,
  },
  item_left_text_bottom:{
    color:color_text_black,
    fontSize:12,
  },
  item_right: {
    width: 42,
    height: 42,
    justifyContent:'center',
    alignItems:'center',
    borderColor:color_text_yellow,
    borderWidth: 2,
    borderRadius: 999
  },
  item_right_text:{
    color: color_text_yellow,
    fontWeight: '600',
    fontSize: 12,
    textTransform:'uppercase',
  },
  not_item:{
    width:'100%',
    height: '85%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: color_background_white,
    borderRadius: 24,
    borderTopLeftRadius: 2
  },
  not_item_img:{
    width: 160,
    height: 160,
    objectFit: 'contain',
    marginBottom: -10
  },
  not_item_img_bg:{
    width: 160,
    height: 160,
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
});
export default LessonScreen;
