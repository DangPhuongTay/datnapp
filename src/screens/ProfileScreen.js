import React,{useContext, useState } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, Image } from "react-native";
import {AuthContext} from '../context/AuthContext';

const ProfileScreen = ({navigation}) =>{
    const {isLoading, userInfo, logout} = useContext(AuthContext);
    return (
        <View style={styles.container}>
           <TouchableOpacity onPress={() => navigation.navigate('Home'?'Home':'HomeTeacher')}>
                   <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
                </TouchableOpacity>
                <Image style={styles.img_avatar} source={require('../../assets/images/profile_avatar.jpg')}></Image>
            <View style={styles.container1}>
                
                <Text style={styles.name}>{userInfo.name}</Text>
                <View style={styles.container2}>
                    <View style={styles.decription}>
                        <Image style={styles.img_dsc} source={require('../../assets/images/profile_img3.png')}></Image>
                        <Text style={styles.title}>Điểm</Text>
                        <Text style={styles.number}>112</Text>
                    </View>

                    <View style={styles.decription}>
                    <Image style={styles.img_dsc} source={require('../../assets/images/profile_img1.png')}></Image>
                        <Text style={styles.title}>Xếp hạng</Text>
                        <Text style={styles.number}>#5</Text>
                    </View>
                    <View style={styles.decription}>
                    <Image style={styles.img_dsc} source={require('../../assets/images/profile_img2.png')}></Image>
                        <Text style={styles.title}>Cấp độ</Text>
                        <Text style={styles.number}>#3</Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={styles.view}>
                        <View style={styles.icon_view}>
                            <Image style={styles.img_icon} source={require('../../assets/images/profile_img4.png')}></Image>
                        </View>
                        <Text style={styles.view_name}>{userInfo.email}</Text>
                    </View>
                <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                    <View style={styles.view}>
                        <View style={styles.icon_view}>
                            <Image style={styles.img_icon} source={require('../../assets/images/profile_img7.png')}></Image>
                        </View>
                        <Text style={styles.view_name}>Thay đổi thông tin</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Password')}>
                    <View style={styles.view}>
                        <View style={styles.icon_view}>
                            <Image style={styles.img_icon} source={require('../../assets/images/profile_img5.png')}></Image>
                        </View>
                        <Text style={styles.view_name}>Đổi mật khẩu</Text>
                    </View>
                </TouchableOpacity>
              
                    <TouchableOpacity style={styles.view} onPress={logout}>
                        <View style={styles.icon_view}>
                            <Image style={styles.img_icon} source={require('../../assets/images/profile_img6.png')}></Image>
                        </View>
                        <Text style={styles.view_name} >Đăng xuất</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        gap:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#62C7F3'
        
    },
    container1:{
        height:600,
        width:'90%',
        backgroundColor:'#fff',
        borderRadius:20,
        display: 'flex',
        gap:10,
        alignItems:'center',
        paddingTop:20,
        marginTop:70
    },
    container2:{
        width: 330,
        height:100,
        backgroundColor:'#4EA7CD',
        borderRadius:16, display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:30,
        paddingTop:15,
        marginTop:10
    },
    container3:{
        marginTop:40
    },
    back:{
        width:40,
        height:40,
        marginRight:'85%',
        marginTop:50
       
    },
    name:{
        marginTop:40,
        fontSize:24,
        
    },
    decription:{
        display:'flex',
        alignItems:'center'
    },
    title:{
        color:'#fff',
        fontSize:20
    },
    number:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    },
    img_avatar:{
        width:100,
        height:100,
        borderRadius:30,
        marginBottom:'-30%',
        zIndex: 10
    },
    img_dsc:{
        width:20,
        height:20
    },
    img_icon:{
        width:30,
        height:30
    },
    view:{
        width:330,
        height:60,
        backgroundColor:'#F9F9F9',
        flexDirection:'row',
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        alignItems:'center',
        marginBottom:20
    
    },
    icon_view: {
        width:60,
        height:60,
        backgroundColor:'#E3F3F9',
        borderRadius:999,
        justifyContent:'center',
        alignItems:'center'
    },
    view_name:{
       fontSize: 20,
       marginStart: 10
    }
});

export default ProfileScreen;