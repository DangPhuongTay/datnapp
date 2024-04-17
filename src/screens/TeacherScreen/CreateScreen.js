import React, { useContext, useState } from "react";
import axios from 'axios';
import { Text, View, Button, TouchableOpacity, StyleSheet, Image, ImageBackground, TextInput } from "react-native";
import { AuthContext } from '../../context/AuthContext';
import Spinner from "react-native-loading-spinner-overlay";
import {BASE_URL} from '../../config';

const CreateScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const {userInfo} = useContext(AuthContext);
    const [name, setName ] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime ] = useState('15');
    const [type, setType ] = useState('Text');
    const id_user = userInfo.id;
    const createTest = (name,description,time,type) => {
        setIsLoading(true);
        axios
        .post(`${BASE_URL}/test/create`,{
            id_user,
           name,
           description,
           time,
           type,
        }).then(res => {
            console.log(res.data);
            setIsLoading(false);
            navigation.navigate('Detail', {
                testId: id_user,
                testName: name,
                testDes: description,
            });
        }).catch(e => {
           console.log(`register error: ${e}`);
        //    console.log(idUser,name,description,type,time);
           setIsLoading(false);
        });
     };
    return (
        
        <ImageBackground source={require('../../../assets/images/bgcreate.jpg')} resizeMode="cover" style={styles.img}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.back} source={require('../../../assets/images/back.png')}></Image>
            </TouchableOpacity>
            <View style={styles.container}>
         
            <Spinner visible={isLoading}/>
                <View style={styles.title}>
                    <Text style={styles.topic}>Chủ đề </Text>
                    <Text style={styles.obligatory}> ( bắt buộc ) </Text>
                </View>
                <TextInput
                    style={styles.inputTitle}
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder="Thêm một chủ đề mô tả"

                />


                <Text style={styles.des} >Mô tả </Text>
                <TextInput
                    style={styles.inputDes}
                    onChangeText={text => setDescription(text)}
                    value={description}
                    placeholder="Cho người dùng biết về bộ câu hỏi của bạn"

                />

                <TouchableOpacity onPress={() => {createTest(name,description,time,type)}}
                    style={styles.button}>
                    <Text style={styles.btn}>Tạo</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >
    );
};
const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 880,
        display: 'flex',
        gap: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'



    },
    back: {
        width: 40,
        height: 40,
        marginRight: '85%',
        marginTop: '-52%',
        marginLeft: 4

    },
    container: {
        width: 350,
        height: 450,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: '-10%',
        padding: 20
    },
    title: {
        display: 'flex',
        flexDirection: 'row',

    },
    topic: {
        fontSize: 18,
        fontWeight: '600'
    },
    obligatory: {
        fontSize: 16,
        color: 'red'
    },
    des: {
        fontSize: 18,
        fontWeight: '600'
    },
    inputTitle: {
        width: 300,
        height: 40,
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10

    },
    inputDes: {
        width: 300,
        height: 200,
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10

    },
    button: {
        width: 80,
        height: 35,
        backgroundColor: '#62C7F3',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '71%',
        marginTop: 50

    },
    btn: {
        fontSize: 20,
        fontWeight: '600',


    }


});
export default CreateScreen;