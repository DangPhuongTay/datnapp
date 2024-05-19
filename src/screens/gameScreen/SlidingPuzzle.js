import React, { useContext, useState } from "react";
import {Image, View,Text,StyleSheet,TouchableOpacity} from "react-native";
import imgback from '../../../assets/images/img_back.png';
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
import SlidingPuzzleBody from "./SlidingPuzzleBody";

const SlidingPuzzle =({ navigation })=>{
    return ( 
        <View style={styles.container}> 
            <TouchableOpacity style={styles.header_left} onPress={() => navigation.navigate("Menu")}>
                    <Image style={styles.header_left_img} source={imgback} />
                </TouchableOpacity>
            <SlidingPuzzleBody/>
        </View>
    )
}
export default SlidingPuzzle;
const styles = StyleSheet.create({

    container: {
        position:'relative',
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: color_background
    },
    header_left:{
        position: 'absolute',
        width: 30,
        height: 30,
        top: 10,
        left: 5
    },
    header_left_img:{
        width: 30,
        height: 30
    }
})