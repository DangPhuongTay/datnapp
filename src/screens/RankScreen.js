import React,{useContext, useState, useEffect } from "react";
import { Text, View,ActivityIndicator, FlatList, Button, TouchableOpacity } from "react-native";
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
        <View style={{flex: 1, padding: 24}}>
        <View>
                 <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                     <Text>⬅️</Text>
               </TouchableOpacity>
            </View>
            
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <Text>
                {item.name}, {item.score}
              </Text>
            )}
          />
        )}
      </View>

        
    );
};

export default RankScreen;