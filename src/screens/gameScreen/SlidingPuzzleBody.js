import React, { useContext, useState,useRef } from "react";
import {Image, View,Text,StyleSheet,TouchableOpacity, Alert} from "react-native";
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
import ButtonItem from "../../components/ButtonItem";

const SlidingPuzzleBody =()=>{
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)
    const [initPositions, setinitPositions] = useState([1,2,3,null,5,6,7,8,4])
    const [positions,SetPositions] = useState([1,2,3,4,5,6,7,8,null])
    const [toggle, setToggle] = useState(false);
    const [start, setStart] = useState(false);
    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }
    const msg = () => {
        if(start){
            var counter = 0;
            for(let i = 0; i < positions.length; i ++){
                if(positions[i] !== initPositions[i]){
                    counter++;
                }
            }
            if(counter === 2){
                clearInterval(countRef.current)
                setIsPaused(false)
                setTimer(0)
                Alert.alert('UWU')
            }
        }
    }
    const handleStart = () => {
        SetPositions(()=>[1,2,3,null,5,6,7,8,4])
        setStart(true)
        setToggle(!toggle)
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
          setTimer((timer) => timer + 1)
        }, 1000)
      }
    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(false)
      }
    
    const handleResume = () => {
        setIsPaused(true)
        countRef.current = setInterval(() => {
          setTimer((timer) => timer + 1)
        }, 1000)
      }
    
    const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
        SetPositions(()=>[1,2,3,4,5,6,7,8,null])
        setStart(true)
        setToggle(!toggle)
      }
    const switchPosition = (position, index)=>{
        if(index === 0){
        positions.map((position2, index2)=>{
            if((position2 === null) && (index2 === 1 || index2 === 3)){
               let auxPositions = positions;
               auxPositions[index] = position2;
               auxPositions[index2] = position;
               SetPositions(auxPositions) ;
               setToggle(!toggle);
            }
        })
        }
        if(index === 1){
            positions.map((position2, index2)=>{
                if((position2 === null) && (index2 === 0 || index2 === 2 || index2 === 4)){
                   let auxPositions = positions;
                   auxPositions[index] = position2;
                   auxPositions[index2] = position;
                   SetPositions(auxPositions);
                   setToggle(!toggle);
                }
            })
        }
        if(index === 2){
            positions.map((position2, index2)=>{
                if((position2 === null) && (index2 === 1 || index2 === 5)){
                   let auxPositions = positions;
                   auxPositions[index] = position2;
                   auxPositions[index2] = position;
                   SetPositions(auxPositions);
                   setToggle(!toggle);
                }
            })
        }
        if(index === 3){
            positions.map((position2, index2)=>{
                if((position2 === null) && (index2 === 0 || index2 === 4 || index2 === 6)){
                   let auxPositions = positions;
                   auxPositions[index] = position2;
                   auxPositions[index2] = position;
                   SetPositions(auxPositions);
                   setToggle(!toggle);
                }
            })
        }
        if(index === 4){
            positions.map((position2, index2)=>{
                if((position2 === null) && (index2 === 1 || index2 === 3 || index2 === 5 || index2 === 7)){
                   let auxPositions = positions;
                   auxPositions[index] = position2;
                   auxPositions[index2] = position;
                   SetPositions(auxPositions);
                   setToggle(!toggle);
                }
            })
        }
        if(index === 5){
            positions.map((position2, index2)=>{
                if((position2 === null) && (index2 === 2 || index2 === 4 || index2 === 8 )){
                   let auxPositions = positions;
                   auxPositions[index] = position2;
                   auxPositions[index2] = position;
                   SetPositions(auxPositions);
                   setToggle(!toggle);
                }
            })
        }
        if(index === 6){
            positions.map((position2, index2)=>{
                if((position2 === null) && (index2 === 3 || index2 === 7)){
                   let auxPositions = positions;
                   auxPositions[index] = position2;
                   auxPositions[index2] = position;
                   SetPositions(auxPositions);
                   setToggle(!toggle);
                }
            })
        }
        if(index === 7){
            positions.map((position2, index2)=>{
                if((position2 === null) && (index2 === 4 || index2 === 6 || index2 === 8)){
                   let auxPositions = positions;
                   auxPositions[index] = position2;
                   auxPositions[index2] = position;
                   SetPositions(auxPositions);
                   setToggle(!toggle);
                }
            })
        }
        if(index === 8){
            positions.map((position2, index2)=>{
                if(position2 === null && (index2 === 7 || index2 === 5)){
                   let auxPositions = positions;
                   auxPositions[index] = position2;
                   auxPositions[index2] = position;
                   SetPositions(auxPositions);
                   setToggle(!toggle);
                }
            })
            if(position === 6 || position === 8){
                msg();
            }
            
        }
    }
    return (
        <View style={styles.container}>
            <View>
                <Text>{formatTime(timer)}</Text>
            </View>
            <View style={styles.body}>
                {positions.map((position, index)=>(
                    <ButtonItem
                        key = {index}
                        lable={position}
                        itemFunction={()=> switchPosition(position,index)}/>
                ))
                }
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}
                    onPress={()=>handleStart()}>
                    <Text style={styles.button_text}>Bắt đầu </Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.button}
                    onPress={()=>handlePause()}>
                    <Text style={styles.button_text}>Tạm dừng </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={()=>handleResume()}>
                    <Text style={styles.button_text}>Chơi tiếp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={()=>handleReset()}>
                    <Text style={styles.button_text}>Chơi Lại </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SlidingPuzzleBody;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        gap: 10
    },
    body: {
        height: 214,
        width: 214,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: color_text_black,
        borderWidth: 2
    },
    buttons:{
        width: 214,
        flexDirection:'row',
        flexWrap:'wrap',
        gap: 5,
        alignItems:'center'
    },
    button:{
        width: 104.5,
        flexDirection:'row',
        backgroundColor:color_background_green_1,
        justifyContent:'center',
        color: color_background_white,
        borderRadius: 5
    },
    button_text:{
        paddingVertical: 5
    },
})