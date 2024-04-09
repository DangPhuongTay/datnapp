import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, ImageBackground } from 'react-native'
import { COLORS, SIZES } from '../components/constants';
import data from '../data/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Quiz = ({navigation}) => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getLession = async () => {
        try {
          const response = await fetch(`${BASE_URL}/question-by-lession/1`);
          const json = await response.json();
          setData(json.data);
          console.error(json.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    
        useEffect(() => {
            getLession(); 
        }, []);
   



    
    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true)
    }
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

 

    const renderQuestion = () => {
        return (

            <View style={{
                
                marginTop:250,
                padding:10,
                flexDirection:'row',
                
                justifyContent:'center'

                }}>
               
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    width:40,
                    height:40,
                    backgroundColor:'#62C7F3',
                    borderRadius:999,
                    alignItems:'center',
                    justifyContent:'center'
                    
                }}>
                    <Text style={{color: '#fff', fontSize: 16,  marginRight: 2, fontWeight:'bold'}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: '#fff', fontSize: 14}}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text style={{
                    color: '#4B4B4B',
                    fontSize: 20,
                    fontWeight:'bold',
                    width:250,
                    marginLeft:20
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
                { 
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 1,
                            
                            borderColor: option==correctOption 
                            ? '#00C851'
                            : option==currentOptionSelected 
                            ? '#ff4444' 
                            : '#818384',
                            backgroundColor: option==correctOption 
                            ? '#00C851'+'40'
                            : option==currentOptionSelected 
                            ? '#ff4444' +'40'
                            : '#62C7F3',
                            width:320,
                            height: 40, borderRadius: 30,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 5,
                            
                            
                            
                        }}
                        >
                            <Text style={{fontSize: 20, color:'#fff',fontWeight:'bold'}}>{option}</Text>

                            {/* Show Check Or Cross Icon based on correct answer*/}
                            {
                                option==correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: '#00C851',
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: '#fff',
                                            fontSize: 20
                                        }} />
                                    </View>
                                ): option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: '#ff4444',
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: '#fff',
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity
                onPress={handleNext}
                style={{
                    marginTop: 10, width: '85%', backgroundColor: '#3498db', padding: 10, borderRadius: 999, marginLeft:30
                }}>
                    <Text style={{fontSize: 20, color: '#fff', textAlign: 'center', fontWeight:'bold'}}>Next</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',
                borderWidth: 1,
                borderColor:'#ddd'

            }}>
                <Animated.View style={[{
                    height: 18,
                    borderRadius: 20,
                    backgroundColor:'#3498db'
                }
                    ,{
                    width: progressAnim
                }]}>
                </Animated.View>

            </View>
        )
    }


    return (
       <SafeAreaView style={{
           flex: 1
       }}>
           <StatusBar barStyle="light-content"  />
           <View style={{
               flex: 1,
               paddingVertical: 40,
               paddingHorizontal: 16,
               backgroundColor: '#fff',
               position:'relative',
             
               
           }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../assets/images/back.png')} 
                    style={{width: 40,
                            height: 40,
                            marginTop:-20,
                            marginBottom:20
                            }}> 
                     </Image>
                </TouchableOpacity>
               {/* ProgressBar */}
               { renderProgressBar() }
               <FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <View style={styles.score}>
              
              
              <Text style={styles.name}>
                {item.name}
              </Text>
              <Text style={styles.point}>
                 {item.score}
              </Text>
              </View>
              
            )}
          />          
               {/* Question */}
               {renderQuestion()}

               {/* Options */}
               {renderOptions()}

               {/* Next Button */}
               {renderNextButton()}

               {/* Score Modal */}
               <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: '#AECCF2',
                       alignItems: 'center',
                       justifyContent: 'center',
                       
                   }}>
                       <View style={{
                           padding: 20,
                           alignItems: 'center',
                          
                           
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score> (allQuestions.length/2) ? '#00C851' : '#ff4444'
                               }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: '#121214'
                                }}>/ { allQuestions.length }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                           onPress={restartQuiz}
                           style={{
                               backgroundColor: '#3498db',
                               padding: 20, width: '100%', borderRadius: 8
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: '#fff', fontSize: 20, fontWeight:'bold'
                               }}>Retry Quiz</Text>
                           </TouchableOpacity>

                       </View>

                   </View>
               </Modal>

               {/* Background Image */}
               <Image
                source={require('../../assets/images/quiz_bg.jpg')}
                style={{
                    width:420,
                    height:960,
                    justifyContent: 'flex-start',
                    alignItems:'center',
                    zIndex:-1,
                    position: 'absolute',
                    objectFit:'fill',
                    marginTop: -60
                    
                }}
                
                />

           </View>
       </SafeAreaView>
    )
}

export default Quiz