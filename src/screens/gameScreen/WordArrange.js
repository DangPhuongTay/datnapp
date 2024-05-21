import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  PanResponder,
  PanResponderInstance,
  Animated,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import imgback from '../../../assets/images/img_back.png';
const color_text_black = "#221E1B";
const color_text_yellow = "#F3AE29";
const color_background = "#f3f4df";
const color_background_white = "#FFFFFF";
const color_background_blue_3 = "#398AFF";
const color_background_blue_1 = "#81D9FF";
const color_background_blue_2 = "#D0EFFF";
const color_background_green_1 = "#7DF4A8";
const color_background_green_2 = "#008000";
const color_background_gray = "rgba(0, 0, 0, 0.21)";
const color_background_gray_1 = "#edede9";
const color_background_gray_2 = "#212529";
const color_background_gray_3 ="#343a40";
const color_background_red = "#e01e37";
const color1 = "#E8F7FE";
const color2 = "#EAF9F2";
const color3 = "#F0F3FE";
const color4 = "#FAF2EB";
const color5 = "#71A8B6";
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function immutableMove(arr, from, to) {

  return arr.reduce((prev, current, idx, self) => {
    if (from === to) {
      prev.push(current);
    }
    if (idx === from) {
      return prev;
    }
    if (from < to) {
      prev.push(current);
    }
    if (idx === to) {
      prev.push(self[from]);
    }
    if (from > to) {
      prev.push(current);
    }

    return prev;

  }, []);
}
let nub = 1;
const colorMap = {};

const textv1 = '1Xin chào, tôi là Tây'
const textv2 = '2Xin chào, tôi là Tây'
const textv3 = '3Xin chào, tôi là Tây'
const text1 = ['Tay','I','am','1Hello ,']
const text2 = ['Tay','I','am','2Hello ,']
const text3 = ['Tay','I','am','3Hello ,']
const texts = [text1,text2,text3];
const textvs = [textv1,textv2,textv3];
export default class App extends React.Component {
  state = {
    dragging: false,
    draggingIdx: -1,
    score: 0,
    data: Array.from(Array(4), (_, i) => {
      colorMap[i] = getRandomColor();
      return i;
    })
  };

  _panResponder: PanResponderInstance;
  point = new Animated.ValueXY();
  currentX = 0;
  scrollOffset = 0;
  flatlistLeftOffset = 0;
  rowWidth = 0;
  currentIdx = 1;
  active = false;

  constructor(props) {
    super(props);

    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
        this.currentIdx = this.xToIndex(gestureState.x0);
        this.currentX = gestureState.y0;
        Animated.event([{ x: this.point.x }])({
          x: gestureState.x0 - this.rowWidth / 2
        });
        this.active = true;
        this.setState({ dragging: true, draggingIdx: this.currentIdx }, () => {
          this.animateList();
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        this.currentX = gestureState.moveX;
        Animated.event([{ x: this.point.x }])({ x: gestureState.moveX });
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        this.reset();
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        this.reset();
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
    });
  }

  animateList = () => {
    if (!this.active) {
      return;
    }

    requestAnimationFrame(() => {
      // check y value see if we need to reorder
      const newIdx = this.xToIndex(this.currentX);
      if (this.currentIdx !== newIdx) {
        this.setState({
          data: immutableMove(this.state.data, this.currentIdx, newIdx),
          draggingIdx: newIdx
        });
        this.currentIdx = newIdx;
      }

      this.animateList();
    });
  };

  xToIndex = (x: number) => {
    const value = Math.floor(
      (this.scrollOffset + x - this.flatlistLeftOffset) / this.rowWidth
    );

    if (value < 0) {
      return 0;
    }

    if (value > this.state.data.length - 1) {
      return this.state.data.length - 1;
    }

    return value;
  };

  reset = () => {
    this.active = false;
    this.setState({ dragging: false, draggingIdx: -1 });
  };
  _handleSubmit = (e) => 
    {   
        const arrnew  = [3,1,2,0];
        if(e[0] === arrnew[0] && e[1] === arrnew[1] && e[3] === arrnew[3] && e[2] === arrnew[2] ){
            Alert.alert('win');
            this.setState({ score: +1 });
            nub++;
        }else{
            Alert.alert('lose')
        }
    };
  render() {
    const { data, dragging, draggingIdx, score } = this.state;
    const { navigation } = this.props;
    const renderItem = ({ item, index }, noPanResponder = false) => (
      <View  {...(noPanResponder ? {} : this._panResponder.panHandlers)}
        onLayout={e => {
          this.rowWidth = 100;
        }}
        style={{
          padding: 16,
          paddingVertical: 12,
          width: 100,
          margin: 1,
          backgroundColor: color_background_gray_1,
          borderRadius: 999,
          opacity: draggingIdx === index ? 0 : 1
        }}
      >
        <Text style={{ fontSize: 18, textAlign: "center" }}>
          {texts[nub-1][item]}
        </Text>
      </View>
    );

    return (<>
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn_back} onPress={() => navigation.navigate("Menu")}>
          <Image style={styles.btn_back_text} source={imgback} />
      </TouchableOpacity>
      <Text style={styles.header_text}>{score}</Text>
    </View>

    <View style={styles.container}>
      <Text style={{ fontSize: 20,color: color_background_gray_3, marginBottom: 20,  width: '90%', textTransform: 'uppercase',fontWeight: 'bold', lineHeight: 35}}>
          Xắp xếp các từ để được câu hoàn chỉnh
        </Text>
        <Text style={{ padding:10, fontSize: 18,color: color_background_gray_2, margin: 10,backgroundColor: color_background_gray_1,width: '95%', marginBottom: 25 }}>
          {nub}. {textvs[nub-1]}
        </Text>
          <View style={styles.content}>
                {dragging && (
                <Animated.View
                    style={{
                    position: "absolute",
                    zIndex: 2,
                    width: 100,
                    top: 0,
                    left: this.point.getLayout().left
                    }}
                >
                    {renderItem({ item: data[draggingIdx], index: -1 }, true)}
                </Animated.View>
                )}

                <FlatList
                scrollEnabled={!dragging}
                contentContainerStyle={{
                    flexDirection:'row',
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center"}}
                data={data}
                renderItem={renderItem}
                onScroll={e => {
                    this.scrollOffset = e.nativeEvent.contentOffset.x;
                }}
                onLayout={e => {
                    this.flatlistLeftOffset = e.nativeEvent.layout.x;
                }}
                scrollEventThrottle={16}
                keyExtractor={item => "" + item}
                />

                </View>
                <TouchableOpacity style={styles.header_left} onPress={() => this._handleSubmit(this.state.data)}>
                   <Text style={styles.header_left_img}>Tiếp Theo</Text>
                </TouchableOpacity>
                </View>     
    </>

      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor: color_background_white
  },
  content: {
    height:100,
    alignItems: "center",
    justifyContent: "center"
  },
  header_left:{
    backgroundColor:color_text_black,
    borderRadius: 24,
    alignItems:'center',
    justifyContent:'center',
    width: 150,
    height: 50,
},
  header_left_img:{
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color:color_background_white
  },
  btn_back:{
    marginTop: 20,
    width: 40,
    height: 40
  },
  btn_back_text:{
    width: 40,
    height: 40
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:color_background_white
  },
  header_text:{
    width:50,
    fontSize: 18,
    fontWeight: 'bold',
    color:color_background_green_2,
    textAlign:'center',
    marginTop:25
  }
});