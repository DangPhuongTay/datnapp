import React,{useContext, useState, useEffect } from "react";
import { Text, View,ActivityIndicator, FlatList, Button, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import {AuthContext} from '../context/AuthContext';
import {BASE_URL} from '../config';
const RankScreen = ({navigation}) =>{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getMovies = async () => {
        try {
          const response = await fetch(`${BASE_URL}/alluser`);
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
         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                   <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
                </TouchableOpacity>
        <View style={styles.container} >
          
               
                <View style={styles.title}><Text style={styles.rank}>Bảng xếp hạng</Text></View>
       
   
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <View style={styles.score}>
              <Text style={styles.point}>
                {item.name}
              </Text>
              <Text style={styles.point}>
                 {item.score}
              </Text>
              </View>
              
            )}
          />
        )}
      </View>

      </ImageBackground> 
    );
};
const styles=StyleSheet.create({
  bg:{
    width:'100%',
    display:'flex',
    gap:10,
  },
  
  container: {
    height: '100%',
    display: 'flex',
    gap:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 50
    
},
back:{
  width:40,
  height:40,
  marginLeft:10,
  marginTop:35

 
},
title:{
  paddingHorizontal:100,
  paddingVertical:10,
  backgroundColor:'#fff',
  marginTop:180,
  alignItems:'center',
  borderRadius:12
  
},
rank:{
  fontSize:24,
  fontWeight:'bold',
  color:'#62C7F3'
},
score:{
  paddingHorizontal:20,
  width:320,
  paddingVertical:10,
  backgroundColor:'#fff',
  marginTop:10,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  borderRadius:12,
  backgroundColor:'#AECCF2'
},
point:{

}
})

export default RankScreen;