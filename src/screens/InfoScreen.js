import React,{useContext, useState } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, TextInput, Image} from "react-native";
import {AuthContext} from '../context/AuthContext';

const InfoScreen = ({navigation}) =>{
    const [email, setEmail ] = useState(null);
    return (
        <View style={styles.container}>
             <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                   <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
                </TouchableOpacity>
                <Image style={styles.img_avatar} source={require('../../assets/images/register_img.png')}></Image>
                <Text style={styles.title}>Thay đổi thông tin của bạn</Text>
                <TextInput placeholder="Tên"
                       style={styles.input}
                       />

            
                <TextInput placeholder="Nhập email mới"
                       style={styles.input}
                       onChangeText={text => setEmail(text)}
                       value={email}/>
                <Touchab leOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
                    <Text style={styles.save}>Lưu</Text>
                </Touchab>
                
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
        display:'flex',
        alignItems:'center'
    },
    back:{
        width:40,
        height:40,
        marginRight:'85%',
        marginTop:30
    }, 
    input:{
            
        width: 380,
        backgroundColor: '#eee',
        borderRadius:12,
        borderColor:'#62C7F3',
        borderWidth:1,
        paddingHorizontal:20,
        paddingVertical: 10,
        marginTop:10
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:50
    },
    button:{
        width: 380,
        backgroundColor:'#62C7F3',
        display:'flex',
        alignItems: 'center',
        borderRadius:12,
        marginTop:10,
        paddingHorizontal:20,
        paddingVertical: 8,
    },
    save:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff'
    },
    img_avatar:{
        width:150,
        height:150,
        
       
        
    },
})
export default InfoScreen;