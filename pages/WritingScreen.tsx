import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { loadTranslation } from '../Database';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, unicode } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { Translation } from '../model/Types';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import { Button } from 'react-native-paper';


export function WritingScreen2({ navigation, route }) {
  const setId = route.params.setId;
  console.log('setId: ' + setId);

  const [num, setNum] = useState(0);
  const [question, setQuestion] = useState({} as Translation);
  const [length, setLength] = useState(0);

  const undoDraw = () => {
    this.sketch.undo();
  }
  const delDraw = () => {
    this.sketch.clear();
  }

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
    if(num + 1 <= length - 1) {
    setNum(num + 1);
    }
  }

  const decrementValue = async() => {
    if(num - 1 >= 0) {
    setNum(num - 1);
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
      <SketchCanvas ref={(sketch) => this.sketch = sketch}
      style={{ backgroundColor: 'white', alignSelf: 'center', height: 175, width: 340, marginTop: 30, shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.4 }}
            strokeColor={'black'}
            strokeWidth={7}
          />
      <View style={styles.row}>
      <Button onPress={() => undoDraw()} style={styles.sketchButton}><Text style={{ fontSize: 15, color: 'white' }}>Undo</Text></Button>
      <Button onPress={() => delDraw()} style={styles.sketchButton}><Text style={{ fontSize: 15, color: 'white' }}>Delete</Text></Button>
      </View>
           {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {num === length - 1 ? (
          <Button onPress={() => navigation.navigate('Function', {setId: setId})} style={styles.submitButton}><Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Submit</Text></Button>
            ) : null}
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
    lineHeight: 175,
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
    height: 175,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4,
    marginTop: 100,
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
  sketchButton: {
    backgroundColor: 'purple',
    width: 100,
    marginTop: 20,
    marginLeft: 50,
    padding: 5,
    borderRadius: 3,
    alignSelf: 'center',
  }
});