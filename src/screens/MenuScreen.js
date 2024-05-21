import React, { useContext, useState } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import { AuthContext } from '../context/AuthContext';
const tier1 = "#a9d6e5";
const tier2 = "#b7e4c7";
const tier3 = "#61a5c2";
const tier4 = "#edafb8";
const tier5 = "#f9eae1";
const color_background = "#f3f4df";
const MenuSreen = ({ navigation }) => {
    const { isLoading, userInfo, logout } = useContext(AuthContext);
    const tiers = [null,tier1, tier2, tier3, tier4, tier5];
    return (
        

                <View style={styles.container}>
                <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.back}
            source={require("../../assets/images/img_back.png")}
          ></Image>
        </TouchableOpacity>
        <View style={styles.header_center}>
          <Text style={styles.header_center_text}> Menu Tùy chọn </Text>
        </View>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Listgame')}
                            style={{
                                backgroundColor:tiers[1],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Chơi </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}
                            style={{
                                backgroundColor:tiers[1],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Chơi </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Level')}
                            style={{
                                backgroundColor:tiers[3],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Cấp độ </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Rank')}
                            style={{
                                backgroundColor:tiers[2],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Xếp hạng </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('History')}
                            style={{
                                backgroundColor:tiers[4],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Lịch sử </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Lesson')}
                            style={{
                                backgroundColor:tiers[5],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Bài học </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('System')}
                            style={{
                                backgroundColor:tiers[1],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Đăng ký Giáo Viên </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('ListTest')}
                            style={{
                                backgroundColor:tiers[2],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Bài kiểm tra </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Shop')}
                            style={{
                                backgroundColor:tiers[3],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Cửa hàng </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Bag')}
                            style={{
                                backgroundColor:tiers[4],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Giỏ hàng </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('SlidingPuzzle')}
                            style={{
                                backgroundColor:tiers[1],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Sắp xếp ảnh </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('WordArrange')}
                            style={{
                                backgroundColor:tiers[1],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Sắp xếp câu </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={logout}
                            style={{
                                backgroundColor:tiers[5],
                                padding: 13,
                                borderRadius: 10,
                                borderBottomEndRadius:24,
                                width: 300,
                                alignItems: 'center',
                            }}>
                            <Text style={styles.btn}> Đăng xuất </Text>
                        </TouchableOpacity>

                    </View>
                </View>

    );
};
const styles = StyleSheet.create({

    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 10,
        backgroundColor: color_background
    },
    header_center: {
        width: 280
    },
    header_center_text:{
      //color:color_text_black,,
      textAlign: 'center',
      fontSize:20,
      textTransform:'uppercase',
      fontWeight:'400',
      backgroundColor:"#fff",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 18,
      borderTopLeftRadius: 2,
      borderBottomRightRadius:2,
      marginLeft: 30,
      fontWeight: "bold",
    },
    header_right: {
  
    },
    content: {
  
    },
    
    back: {
        width: 40,
        height: 40,
        // marginRight: '85%',
        // marginTop: 10,
        // marginLeft: 4

    },
    header: {
        width: 400,
    flexDirection: "row",
    paddingVertical: 20,
    alignItems:'center',
    marginTop: 10,
      },
    
    button: {
 
        // paddingVertical: 15,
        // width: 300,
        // marginBottom: 10,
        // backgroundColor: '#fff',
        // display: 'flex',
        // alignItems: 'center',
        // borderRadius: 15,
    },

    btn: {
        fontSize: 18,
    },

    img: {
       
    },   
});
export default MenuSreen;