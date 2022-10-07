import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Image, View, Text, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Voice from '@react-native-community/voice';
import { Button } from 'react-native-paper';
import { loadTranslation } from '../Database';
import { Translation } from '../model/Types';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons/faMicrophone'
import { faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons/faMicrophoneSlash'



export function SpeakingScreen2({ navigation, route }) {
  const setId = route.params.setId;
  console.log('setId: ' + setId);

  const [num, setNum] = useState(0);
  const [question, setQuestion] = useState({} as Translation);
  const [result, setResult] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [similar, setSimilar] = useState(false)
  const [color, setColor] = useState('')
  const [text, setText] = useState('')
  const [called, setCalled] = useState(false)
  const [length, setLength] = useState(0);

  useEffect(() => {
    const loadQuestion = async () => {
      const question = await loadTranslation(setId);
      setLength((await loadTranslation(setId)).length)
      setQuestion(question[num]);
      console.log('Question: ', JSON.stringify(question));
    }
    loadQuestion();
  }, [num]);

  const incrementValue = async () => {
    clearText();
    setCalled(false);
    if(num + 1 <= length - 1) {
    setNum(num + 1);
    }
  }

  const decrementValue = async() => {
    setCalled(false);
    if(num - 1 >= 0) {
    setNum(num - 1);
    }
  }

  const testSimilar = () => {
    setCalled(true);
    if (result === question.character) {
      setSimilar(true);
      setColor('green');
      setText('Correct! Move On To The Next Character');
    } else {
      setSimilar(false)
      setColor('red');
      setText('Incorrect! Try Again');
    }
  }

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, [])

  const clearText = () => {
    setCalled(false);
    setResult('');
  }
  const onSpeechStartHandler = (e) => {
    setCalled(false);
    console.log("start handler==>>>", e)
  }
  const onSpeechEndHandler = (e) => {
    setCalled(false);
    setLoading(false)
    console.log("stop handler", e)
  }

  const onSpeechResultsHandler = (e) => {
    setCalled(false);
    let text = e.value[0]
    setResult(text)
    console.log("speech result handler", e)
  }

  const setLanguage = () => {
    if(setId === 5) {
      return 'zh-CN';
    } else if(setId === 6) {
      return 'es-ES';
    }
  }

  const startRecording = async () => {
    setCalled(false);
    setLoading(true)
    try {
      await Voice.start(setLanguage())
    } catch (error) {
      console.log("error raised", error)
    }
  }

  const stopRecording = async () => {
    setCalled(false);
    try {
      await Voice.stop()
    } catch (error) {
      console.log("error raised", error)
    }
  }

  return (
    <ImageBackground
      source={require('../images/purpleBackground.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.text}>{question.character}</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button} onPress={decrementValue}>
            <FontAwesomeIcon icon={faArrowLeft} size={25} style={{ alignSelf: 'center', marginTop: 8 }} />
          </TouchableOpacity>
          <View style={styles.numContainer}>
            <Text style={{ fontSize: 13 }}>{num + 1} / {length}</Text>
          </View>
          <TouchableOpacity
            style={styles.button2} onPress={incrementValue}>
            <FontAwesomeIcon icon={faArrowRight} size={25} style={{ alignSelf: 'center', marginTop: 8 }} />
          </TouchableOpacity>
        </View>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        { called === true ? (
          <Text style={{ alignSelf: 'center', color: color, fontWeight: 'bold', marginTop: 15, marginBottom: -32 }}>{text}</Text>
        ) :
          null
        }
        <SafeAreaView>
          <View style={styles.textInputStyle}>
            <TextInput
              value={result}
              placeholder="Speak"
              style={{ flex: 1, fontSize: 50 }}
              onChangeText={text => setResult(text)}
            />
          </View>
          <View style={styles.row}>
            {isLoading ? <ActivityIndicator size="large" color="red" style={{ marginTop: 30 }} />

              :
              <TouchableOpacity
                onPress={startRecording}
              >
                <FontAwesomeIcon icon={faMicrophone} size={40} color='green' style={{  marginTop: 30, alignSelf: 'center'  }} />
              </TouchableOpacity>}


            <TouchableOpacity
              onPress={stopRecording}
            >
              <FontAwesomeIcon icon={faMicrophoneSlash} size={48} color='red' style={{  marginLeft: 30, marginTop: 28, alignSelf: 'center' }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginTop: 30,
                marginLeft: 100,
                width: 100,
                backgroundColor: '#87ceeb',
                padding: 12,
                borderRadius: 4
              }}
              onPress={clearText}
            >
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Clear</Text>
            </TouchableOpacity>
          </View>
          <Button onPress={testSimilar} style={styles.testButton}><Text style={{ fontSize: 15 }}>Test</Text></Button>
           {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {num === length - 1 ? (
          <Button onPress={() => navigation.navigate('Function', {setId: setId})} style={styles.submitButton}><Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Submit</Text></Button>
            ) : null}
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    lineHeight: 250,
  },
  numContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 40,
    height: 40,
    marginTop: 30,
    marginLeft: -2,
  },
  button: {
    backgroundColor: 'white',
    marginTop: 30,
    marginLeft: 110,
    width: 40,
    height: 40,
    borderRadius: 3,
  },
  button2: {
    backgroundColor: 'white',
    marginTop: 30,
    marginLeft: -1,
    width: 40,
    height: 40,
    borderRadius: 3,
    fontSize: 10,
  },
  cardContainer: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 340,
    height: 250,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    marginTop: 90,
    shadowOpacity: 0.4
  },
  textInputStyle: {
    marginTop: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 75,
    borderRadius: 5,
    paddingHorizontal: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4
  },
  row: {
    flexDirection: 'row',
  },
  background: {
    width: '100%',
    height: '100%'
  },
  testButton: {
    backgroundColor: 'white',
    width: 200,
    marginTop: 30,
    padding: 5,
    borderRadius: 3,
    alignSelf: 'center',
  },
  submitButton: {
    backgroundColor: '#87ceeb',
    width: 300,
    marginTop: 40,
    padding: 5,
    borderRadius: 3,
    alignSelf: 'center',
  },
});