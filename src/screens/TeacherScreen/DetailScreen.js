import React, { useContext, useState } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, Image, ImageBackground, TextInput, ScrollView } from "react-native";
import { AuthContext } from '../../context/AuthContext';
import Checkbox from 'expo-checkbox';
import { SafeAreaView } from "react-native-safe-area-context";

const DetailScreen = ({ navigation }) => {
    const { isLoading, userInfo, logout } = useContext(AuthContext);
    const [text, onChangeText] = React.useState('');
    const [isChecked, setChecked] = useState(false);
    return (
        <ImageBackground source={require('../../../assets/images/bgcreate.jpg')} resizeMode="cover" style={styles.img}>
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Image style={styles.back} source={require('../../../assets/images/back.png')}></Image>
            </TouchableOpacity>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.question}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>0 Question </Text>
                        </View>

                        <TouchableOpacity style={styles.add} onPress={() => navigation.navigate('Create')}>
                            <Image style={styles.addIcon} source={require('../../../assets/images/icon/add.png')}></Image>
                            <Text style={styles.addQuestion}>Add Question</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.change}>
                        <View style={styles.changeTop}>
                            <TouchableOpacity style={styles.btnEdit} onPress={() => navigation.navigate('Home')}>

                                <Text style={styles.edit}>Edit</Text>
                            </TouchableOpacity>
                            <View style={styles.titleQuestion}>
                                <Text style={styles.numberQuestion}>Question 1</Text>
                                <Text style={styles.title}>Title</Text>
                            </View>
                        </View>

                        <View style={styles.btnChange}>
                            <TouchableOpacity style={styles.btnDelete} onPress={() => navigation.navigate('Home')}>
                                <Image style={styles.recycleIcon} source={require('../../../assets/images/icon/recycle.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnCopy} onPress={() => navigation.navigate('Home')}>
                                <Image style={styles.copyIcon} source={require('../../../assets/images/icon/copy.png')}></Image>
                            </TouchableOpacity>
                        </View>

                    </View>



                    <View style={styles.form}>
                        <View style={styles.formQuestion}>
                            <TextInput
                                style={styles.inputQuestion}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder="Nhập câu hỏi"

                            />
                        </View>
                        <View style={styles.formAnswer}>
                            <View>
                                <View style={styles.checkAnswer}>

                                    <TextInput
                                        style={styles.inputAnswer}
                                        onChangeText={onChangeText}
                                        value={text}
                                        placeholder="Nhập câu trả lời"

                                    />

                                </View>
                                <View style={styles.checkAnswer}>

                                    <TextInput
                                        style={styles.inputAnswer}
                                        onChangeText={onChangeText}
                                        value={text}
                                        placeholder="Nhập câu trả lời"

                                    />

                                </View>
                            </View>
                            <View>
                                <View style={styles.checkAnswer}>

                                    <TextInput
                                        style={styles.inputAnswer}
                                        onChangeText={onChangeText}
                                        value={text}
                                        placeholder="Nhập câu trả lời"

                                    />

                                </View>
                                <View style={styles.checkAnswer}>

                                    <TextInput
                                        style={styles.inputAnswer}
                                        onChangeText={onChangeText}
                                        value={text}
                                        placeholder="Nhập câu trả lời"

                                    />

                                </View>
                            </View>

                        </View>
                    </View>




                    <TouchableOpacity onPress={() => navigation.navigate('Home')}
                        style={styles.button}>
                        <Text style={styles.btn}>Tạo</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
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
        marginTop: '-53%',
        marginLeft: 4

    },
    container: {
        width: 350,
        height: 400,
        backgroundColor: '#fff',
        borderRadius: 20,

        padding: 20
    },
    scrollView: {

    },
    question: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
    },
    number: {
        width: 100,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#F3F0F0",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    numberText: {
        fontWeight: '800'
    },
    add: {
        width: 130,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "#62C7F3",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIcon: {
        width: 24,
        height: 24
    },

    addQuestion: {
        fontWeight: '800'
    },
    change: {
        width: 310,
        height: 100,
        borderRadius: 12,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey',
        display: 'flex',
        marginBottom: 20,
        padding: 10

    },
    changeTop: {
        display: 'flex',
        flexDirection: 'row'

    },
    btnEdit: {
        width: 70,
        height: 30,
        backgroundColor: '#62C7F3',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginRight: 10
    },
    edit: {

        fontWeight: '800'

    },
    btnChange: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    btnDelete: {
        backgroundColor: '#F3F0F0',

        paddingVertical: 4,
        borderRadius: 4
    },
    btnCopy: {
        backgroundColor: '#F3F0F0',
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 4,
        marginLeft: 10
    },

    recycleIcon: {
        width: 12,
        height: 18,
        marginLeft: 8,
        marginRight: 10,


    },
    copyIcon: {
        width: 18,
        height: 18
    },
    form: {
        width: 310,
        height: 220,
        borderRadius: 12,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey',
        display: 'flex',
        alignItems: 'center',



    },
    formQuestion: {
        width: 230,
        height: 70,
        borderRadius: 12,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    formAnswer: {
        width: 300,
        height: 80,
        display: 'flex',
        flexDirection: 'row'

    },
    checkAnswer: {
        width: 145,
        height: 35,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#AEE7F9',
        marginRight: 10

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


    },




});
export default DetailScreen;