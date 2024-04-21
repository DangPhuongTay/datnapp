import React, { useContext, useState } from "react";
import axios from 'axios';
import { Text, View, Button, TouchableOpacity, StyleSheet, Image, ImageBackground, TextInput, ScrollView } from "react-native";
import { AuthContext } from '../../context/AuthContext';
import Spinner from "react-native-loading-spinner-overlay";
import { BASE_URL } from '../../config';
import { SelectList } from 'react-native-dropdown-select-list';

const CreateScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { userInfo } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('15');
    const [type, setType] = useState('Text');
    const id_user = userInfo.id;
    const data = [
        { key: '1', value: 'Test' },
        { key: '2', value: 'Listen' },
        { key: '3', value: 'Image' },

    ]
    const times = [
        { key: '1', value: '15 phút' },
        { key: '2', value: '30 phút' },
        { key: '3', value: '45 phút' },
        { key: '4', value: '1 giờ' },

    ]
    const [answer, setAnswer] = useState([]);

    const createTest = (name, description, time, type) => {
        setIsLoading(true);
        axios
            .post(`${BASE_URL}/test/create`, {
                id_user,
                name,
                description,
                time,
                type,
            }).then(res => {
                console.log(res.data);
                setIsLoading(false);
                navigation.navigate('ListTestTeacher');
            }).catch(e => {
                console.log(`register error: ${e}`);
                //    console.log(idUser,name,description,type,time);
                setIsLoading(false);
            });
    };
    return (

        <View style={styles.bg} >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('MenuTeacher')}>
                    <Image style={styles.back} source={require('../../../assets/images/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.textHeader}>Tạo bộ đề của bạn</Text>
            </View>

            <View style={styles.container}>
                <Image style={styles.itemCreate} source={require('../../../assets/images/item3_home_list.png')}>

                </Image>
                <View style={styles.option}>
                    <View style={styles.select1}>
                        <SelectList
                            placeholder="Chọn loại đề"
                            setSelected={text => setAnswer(text)}
                            data={data}
                            search={false}
                            maxHeight={300}
                            save="value"
                            boxStyles={{ backgroundColor: '#62C7F3', width: 140 }}
                        />
                    </View>
                    <View style={styles.select2}>
                        <SelectList

                            placeholder="Chọn thời gian"
                            setSelected={text => setTime(text)}
                            data={times}
                            search={false}
                            maxHeight={300}
                            save="value"
                            boxStyles={{ backgroundColor: '#62C7F3', width: 140 }}
                        />
                    </View>
                </View>

                <Spinner visible={isLoading} />
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
                    multiline={true}
                    numberOfLines={50}

                />



                <TouchableOpacity onPress={() => { createTest(name, description, time, type) }}
                    style={styles.button}>
                    <Text style={styles.btn}>Tạo</Text>
                    <Image style={styles.imgCreate} source={require('../../../assets/images/item6_home_list.png')}>

                    </Image>
                </TouchableOpacity>
            </View>
        </View >
    );
};
const styles = StyleSheet.create({


    bg: {
        width: '100%',
        height: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        top: 50,


    },
    back: {
        width: 40,
        height: 40,
        top: -25,

        left: -80

    },
    textHeader: {
        fontSize: 22,
        top: -22
    },
    container: {
        width: 350,
        height: 550,
        backgroundColor: '#C0EDFC',
        borderRadius: 20,
        top: 70,
        padding: 20
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        top: -20

    },
    itemCreate: {
        width: 100,
        height: 100,
        top: -60,
        left: -40
    },
    topic: {
        fontSize: 18,
        fontWeight: '600',

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
        top: -10,
        paddingHorizontal: 10


    },

    inputDes: {
        width: 300,
        maxHeight: 200,
        paddingHorizontal: 10,

        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 8,
    },
    option: {
        width: 300,


        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: -40
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
        top: 25


    },
    imgCreate: {
        width: 50,
        height: 50,
        right: -45,
        top: -10
    }


});
export default CreateScreen;