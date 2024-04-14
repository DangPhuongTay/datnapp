import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  TouchableOpacity, 
  Image
} from "react-native";
import { colors, CLEAR, ENTER, colorsToEmoji } from "../../components/constants";
import Keyboard from "../../components/Keyboard";
import * as Clipboard from "expo-clipboard";


const NUMBER_OF_TRIES = 4;

const copyArray = (arr) => {
  return [...arr.map((rows) => [...rows])];
};

const words = {
  english: "dog",
  vietnamese: "Chó",
  type: "noun",
  pronounce: "/doɡ/",
  description: "a domestic, meat-eating animal related to the wolf and fox",
};

const WordleSreen = ({navigation}) => {

  const word = words.english;
  const letters = word.split(""); // ['h', 'e', 'l', 'l', 'o']
  
  const [rows, setRows] = useState(
    new Array(NUMBER_OF_TRIES).fill(new Array(letters.length).fill(""))
  );
  const [curRow, setCurRow] = useState(0);
  const [curCol, setCurCol] = useState(0);
  const [gameState, setGameState] = useState("playing"); // won, lost, playing

  useEffect(() => {
    if (curRow > 0) {
      checkGameState();
    }
  }, [curRow]);

  const checkGameState = () => {
    if (checkIfWon() && gameState !== "won") {
      Alert.alert("Đúng rồi, tốt lắm!", words.vietnamese+": "+words.english , [
        { text: "Tiếp tục", onPress: shareScore },
      ]);
      setGameState("won");
    } else if (checkIfLost() && gameState !== "lost") {
      Alert.alert("Ô không!", "Thử lại vào lần khác nhé!",[
        { text: "Quay về", onPress: () => navigation.navigate('Listgame') },
      ]);
    }
  };

  const shareScore = () => {
    Alert.alert("Bạn làm tốt lắm!", "Bạn được cộng 1 điểm" , [
      { text: "Quay về", onPress: () => navigation.navigate('Listgame') },
    ]);;
  };

  const checkIfWon = () => {
    const row = rows[curRow - 1];

    return row.every((letter, i) => letter === letters[i]);
  };

  const checkIfLost = () => {
    return !checkIfWon() && curRow === rows.length;
  };

  const onKeyPressed = (key) => {
    if (gameState !== "playing") {
      return;
    }

    const updatedRows = copyArray(rows);

    if (key === CLEAR) {
      const prevCol = curCol - 1;
      if (prevCol >= 0) {
        updatedRows[curRow][prevCol] = "";
        setRows(updatedRows);
        setCurCol(prevCol);
      }
      return;
    }

    if (key === ENTER) {
      if (curCol === rows[0].length) {
        setCurRow(curRow + 1);
        setCurCol(0);
      }

      return;
    }

    if (curCol < rows[0].length) {
      updatedRows[curRow][curCol] = key;
      setRows(updatedRows);
      setCurCol(curCol + 1);
    }
  };

  const isCellActive = (row, col) => {
    return row === curRow && col === curCol;
  };

  const getCellBGColor = (row, col) => {
    const letter = rows[row][col];

    if (row >= curRow) {
      return colors.grey;
    }
    if (letter === letters[col]) {
      return colors.primary;
    }
    if (letters.includes(letter)) {
      return colors.secondary;
    }
    return colors.darkgrey;
  };

  const getAllLettersWithColor = (color) => {
    return rows.flatMap((row, i) =>
      row.filter((cell, j) => getCellBGColor(i, j) === color)
    );
  };

  const greenCaps = getAllLettersWithColor(colors.primary);
  const yellowCaps = getAllLettersWithColor(colors.secondary);
  const greyCaps = getAllLettersWithColor(colors.darkgrey);

  return (
  
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <TouchableOpacity onPress={() => navigation.navigate('Listgame')}>
                     <Text></Text>
                     <Image style={styles.back} source={require('../../../assets/images/back.png')}></Image>
               </TouchableOpacity>      
        
      <Text style={styles.title}>{words.vietnamese}</Text>
      
      <ScrollView style={styles.map}>
        {rows.map((row, i) => (
          <View key={`row-${i}`} style={styles.row}>
            {row.map((letter, j) => (
              <View
                key={`cell-${i}-${j}`}
                style={[
                  styles.cell,
                  {
                    borderColor: isCellActive(i, j)
                      ? colors.lightgrey
                      : colors.darkgrey,
                    backgroundColor: getCellBGColor(i, j),
                  },
                ]}
              >
                <Text style={styles.cellText}>{letter.toUpperCase()}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      <Keyboard
        onKeyPressed={onKeyPressed}
        greenCaps={greenCaps} // ['a', 'b']
        yellowCaps={yellowCaps}
        greyCaps={greyCaps}
      />
    </SafeAreaView>
  );
}
export default WordleSreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: "center",
  },
  title: {
    color: colors.while,
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 7,
  },

  map: {
    alignSelf: "stretch",
    marginVertical: 20,
    
  },
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    
  },
  cell: {
    borderWidth: 3,
    borderColor: colors.darkgrey,
    backgroundColor: '#fff',
    flex: 1,
    maxWidth: 70,
    aspectRatio: 1,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:15,
    justifyContent: "space-evenly",
  },
  cellText: {
    color: colors.lightgrey,
    fontWeight: "bold",
    fontSize: 28,
  },
  back:{
    width:40,
    height:40,
    marginRight:'85%',
    marginTop:10,
    marginLeft: 4
   
},
});
