import React, { useContext, useState } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, TextInput, Image, } from "react-native";
import { AuthContext } from '../context/AuthContext';

const BagScreen = ({ navigation }) => {
    const { userInfo, logout } = useContext(AuthContext);
    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Bạn muốn mua gì?</Text>
                <Image style={styles.headerBag} source={require('../../assets/images/bag.png')}></Image>
            </View>
            <View style={styles.searchBar}>
                <TextInput placeholder="Search"
                    style={styles.inputSearch}

                />

                <TouchableOpacity onPress={() => navigation.navigate('Bag')}>
                    <Image style={styles.searchIcon} source={require('../../assets/images/search.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.categories}>
                    <View>

                        <TouchableOpacity style={styles.itembtn1} onPress={() => navigation.navigate('Bag')}>
                            <Text style={styles.itemtext} >Tất cả</Text>
                        </TouchableOpacity>

                    </View>
                    <View>

                        <TouchableOpacity style={styles.itembtn1} onPress={() => navigation.navigate('Bag')}>
                            <Text style={styles.itemtext} >Trái cây</Text>
                        </TouchableOpacity>

                    </View>
                    <View>

                        <TouchableOpacity style={styles.itembtn1} onPress={() => navigation.navigate('Bag')}>
                            <Text style={styles.itemtext} >Đồ hộp</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.productList}>
                    <View style={styles.productItem}>
                        <View style={styles.image}>
                            <Image style={styles.productImg} source={require('../../assets/images/banana.png')}></Image>
                        </View>

                        <Text style={styles.productName}>Chuối</Text>
                        <Text style={styles.productPrice}>$3.4</Text>
                        <View style={styles.productCart}>

                            <Image style={styles.addCart} source={require('../../assets/images/add-to-cart.png')}></Image>
                        </View>
                    </View>
                </View>
            </View>

        </View>



    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#f3f4df',

        alignItems: 'center',
        height: '100%'
    },
    back: {
        width: 40,
        height: 40
    },
    headerBag: {
        width: 30,
        height: 30
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        top: 30,
        justifyContent: 'space-between',
        width: '95%',

    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600'
    },
    searchIcon: {
        width: 30,
        height: 30,

    },
    searchBar: {
        width: 350,
        height: 40,
        backgroundColor: '#fff',
        top: 50,
        borderRadius: 30,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    categories: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    itembtn1: {
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    body: {
        width: '85%',
        top: 80
    },
    itemtext: {
        fontWeight: '600'
    },
    productList: {
        width: '100%',
        height: 'auto',
        top: 40
    },
    productItem: {
        width: '45%',
        height: 190,
        backgroundColor: '#fff',
        borderRadius: 100,
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {



    },
    productImg: {
        width: 100,
        height: 100,
        top: 10,


    },
    productCart: {
        width: 75,
        height: 75,
        backgroundColor: '#000',
        alignItems: 'center',
        borderRadius: 999,
        top: 10

    },
    addCart: {
        width: 30,
        height: 30,
        top: 5
    },
    productName: {
        fontSize: 18,
        fontWeight: '400'
    },
    productPrice: {
        fontWeight: '800'
    }


})
export default BagScreen;