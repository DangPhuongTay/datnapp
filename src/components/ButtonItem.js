import React, { useContext, useState } from "react";
import { Image,View,Text,StyleSheet,TouchableOpacity} from "react-native";
import styled  from "styled-components";
import img0 from '../../assets/images/imgs-game/anh-1.jpg';
import img1 from '../../assets/images/imgs-game/anh-2.jpg';
import img2 from '../../assets/images/imgs-game/anh-3.jpg';
import img3 from '../../assets/images/imgs-game/anh-4.jpg';
import img4 from '../../assets/images/imgs-game/anh-5.jpg';
import img5 from '../../assets/images/imgs-game/anh-6.jpg';
import img6 from '../../assets/images/imgs-game/anh-7.jpg';
import img7 from '../../assets/images/imgs-game/anh-8.jpg';
import img8 from '../../assets/images/imgs-game/anh-9.jpg';
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

const ButtonItem =(props)=>{
    const imgs = [img0,img1,img2,img3,img4,img5,img6,img7,img8]
    const Container = styled.View`
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props.lable == 9) ? "0" : "1"};
    border:1px solid white;
    `
    return (
        <TouchableOpacity onPress={props.itemFunction}>
           <Container> 
                <Image source={imgs[props.lable-1]} style={styles.img}>
                </Image>
            </Container>
        </TouchableOpacity>
    )
}
export default ButtonItem;
const styles = StyleSheet.create({

    img: {
        height: 70,
        width: 70,
    },

})