import React, { useContext, useState, useEffect } from "react";
import { Text, View, ActivityIndicator, FlatList, Button, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../config';
import medal1 from '../../assets/images/medal1.png';
import medal2 from '../../assets/images/medal2.png';
import medal3 from '../../assets/images/medal3.png';

const RankScreen = ({ navigation }) => {
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
    <View style={styles.bg} >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image style={styles.back} source={require('../../assets/images/back.png')}></Image>
        </TouchableOpacity>
        <View style={styles.title}><Text style={styles.rank}>Bảng xếp hạng trò chơi</Text></View>
      </View>

      <View style={styles.container} >

        <View style={styles.banner}>

          <View style={styles.bannerRank}>
            <View style={styles.bannerFirst}>
              <Image style={styles.itemImgBanner} source={require('../../assets/images/item2_home_list.png')}></Image>
              <Text style={styles.bannerText}>2</Text></View>
            <View style={styles.bannerSecond}>
              <Image style={styles.itemImgBanner} source={require('../../assets/images/item3_home_list.png')}></Image>
              <Text style={styles.bannerText}>1</Text></View>
            <View style={styles.bannerThird}>
              <Image style={styles.itemImgBanner} source={require('../../assets/images/item4_home_list.png')}></Image>
              <Text style={styles.bannerText}>3</Text></View>
          </View>
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.list} >
            <FlatList contentContainerStyle={styles.listView}
              data={data}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <View style={styles.score}>
                  <View style={styles.name}>
                    <Text style={styles.name1}> {rank = rank + 1}</Text>
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

    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    width: 400,
    paddingStart: 20,
    height: 340,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  img: {
    position: 'absolute',
    right: -30,
    top: -15,
    width: 35,
    height: 35
  },
  bg: {
    width: '100%',
    display: 'flex',
    gap: 10,
    backgroundColor: '#C0EDFC'
  },
  header: {
    width: 400,

    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10

  },
  container: {
    height: 900,
    display: 'flex',
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 100,

  },
  bannerImg: {
    display: 'flex',
    flexDirection: 'row',

  },

  back: {
    width: 40,
    height: 40,

  },

  title: {
    width: 400,
    height: 50,
    marginLeft: 50,
    marginTop: 5
  },
  rank: {
    fontSize: 22,
    fontWeight: '600'

  },
  bannerRank: {
    display: 'flex',
    flexDirection: 'row',

  },
  itemImgBanner: {
    width: 80,
    height: 80,
    bottom: 40
  },
  bannerFirst: {
    width: 70,
    height: 80,
    backgroundColor: '#4CA6C2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    left: -40,
    bottom: -30
  },
  bannerSecond: {
    width: 70,
    height: 110,
    backgroundColor: '#F99A9C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  bannerThird: {
    width: 70,
    height: 60,
    backgroundColor: '#89AEB2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    left: 40,
    bottom: -50
  },
  bannerText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    bottom: 40
  },
  list: {
    backgroundColor: '#fff',
    width: 430,
    height: 600,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 40,
    top: -10
  },
  listView: {
    left: 40,
    height: 700,
    top: 30

  },
  score: {
    position: 'relative',
    paddingHorizontal: 10,
    width: 350,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#62C7F3'

  },
  point: {
    fontSize: 20,
    marginEnd: 10,
    color: '#4B4B4B',
    fontWeight: 'bold'
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  name1: {
    color: '#4CA6C2',
    fontSize: 22,
    fontWeight: 'bold'

  },
  name2: {
    color: '#4B4B4B',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default RankScreen;