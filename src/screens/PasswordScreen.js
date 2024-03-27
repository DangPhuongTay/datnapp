import React,{useContext, useState } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";
import {AuthContext} from '../context/AuthContext';

const PasswordScreen = ({navigation}) =>{
    const {isLoading, userInfo, logout} = useContext(AuthContext);
    const [password, setPassword ] = useState(null);
    return (
        <View style={styles.container}>
            
            
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                   <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
                </TouchableOpacity>
           
            <View>
                <Text style={styles.title}>Đổi mật khẩu</Text>
                <Text >Mật khẩu của bạn phải có tối thiểu 6 ký tự</Text>
                <TextInput placeholder="Mật khẩu cũ"
                       style={styles.input}
                       onChangeText={text => setPassword(text)}
                       value={password}/>
                <TextInput placeholder="Nhập mật khẩu mới"
                       style={styles.input}
                       onChangeText={text => setPassword(text)}
                       value={password}/>
                <TextInput placeholder="Nhập lại mật khẩu mới"
                       style={styles.input}
                       onChangeText={text => setPassword(text)}
                       value={password}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
                    <Text style={styles.save}>Lưu</Text>
                </TouchableOpacity>
            
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
    }
})

export default PasswordScreen;