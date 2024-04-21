import React,{useContext, useState, useEffect } from "react";
import { Text, View,ActivityIndicator, FlatList, Button, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import {AuthContext} from '../context/AuthContext';
import {BASE_URL} from '../config';
import medal1 from '../../assets/images/medal1.png';
import medal2 from '../../assets/images/medal2.png';
import medal3 from '../../assets/images/medal3.png';
const RankScreen = ({navigation}) =>{
    const [isLoading, setLoading] = useState(true);
    const imgs = [medal1, medal2, medal3];
    const [data, setData] = useState([]);
    let rank = 0;
    let nubicon = 0;
    const getMovies = async () => {
        try {
          const response = await fetch(`${BASE_URL}/rank`);
          const json = await response.json();
          setData(json.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    
  useEffect(() => {
    getMovies();
  }, []);

    return (
      <ImageBackground style={styles.bg} source={require('../../assets/images/rank_img.jpg')}>
         <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                   <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
                </TouchableOpacity>
        <View style={styles.container} >
                <View style={styles.title}><Text style={styles.rank}>🏆 Bảng xếp hạng trò chơi</Text></View>

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.list} >
          <FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <View style={styles.score}>
              <View style={styles.name}>
                <Text style={styles.name1}> {rank = rank+ 1}</Text>
                <Text style={styles.name2}>{item.name}</Text>
              </View>
              <View style={styles.right}>
              <Text style={styles.point}>
                 {item.rank}
              </Text>
              <Image style={styles.img} source={imgs[nubicon++]} />
              </View>
              </View>
            )}
          />
           </View>
        )}
      </View>

      </ImageBackground> 
    );
};
const styles=StyleSheet.create({
  list:{
    width: 400,
    paddingStart: 20,
    height: 340,
  },
  right:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  img:{
    position:'absolute',
    right: -40,
    top:-25, 
    width:50,
    height:50
  },
  bg:{
    width:'100%',
    display:'flex',
    gap:10,
  },
  
  container: {
    height: 549,
    display: 'flex',
    gap:10,
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop: 50,
   
},
back:{
  width:40,
  height:40,
  marginLeft:10,
  marginTop:35
},
title:{
  paddingHorizontal:50,
  paddingVertical:20,
  backgroundColor:'#fff',
  marginTop:110,
  alignItems:'center',
  borderRadius:12
},
rank:{
  fontSize:22,
  fontWeight:'bold',
  color:'#62C7F3'
},
score:{
  position: 'relative',
  paddingHorizontal:15,
  width:350,
  paddingVertical:15,
  backgroundColor:'#fff',
  marginTop:15,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  borderRadius:12,
  backgroundColor:'#AECCF2'
},
point:{
  fontSize:20,
  marginEnd: 10,
 color: '#4B4B4B',
 fontWeight:'bold'
},
name:{
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
},
name1:{
  color:'#4B4B4B',
  fontSize:24,
  fontWeight:'bold'
},
name2:{
  color:'#fff',
  fontSize:22,
  fontWeight:'bold'
}
})

export default RankScreen;