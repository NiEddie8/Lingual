import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardFlip from 'react-native-card-flip';
import { loadChinese } from '../../Database';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { ChineseQuestion } from '../../model/Types';

export function ChineseFlashcardsScreen2() {

  const [num, setNum] = useState(1);
  const [question, setQuestion] = useState({} as ChineseQuestion);
  
  useEffect(() => {
    const loadQuestion = async () => {
      const question = await loadChinese(num);
      setQuestion(question);
      console.log('Question: ', JSON.stringify(question));
    }

    loadQuestion();
  }, [num]);

    const incrementValue = async () => {
      if(num + 1 <= 10) {
      setNum(num + 1);
      }
    }

    const decrementValue = async () => {
      if(num - 1 >= 1) {
      setNum(num - 1);
      }
    }
  const navigation = useNavigation();
 
  return(
  <ImageBackground
  source={require('../../images/bluebackground.webp')}
  style={styles.background}
  >
  <CardFlip style={styles.cardContainer} flipDirection='x' ref={(card) => this.card = card} >
    <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text style={styles.text}>{question.ChineseCharacter}</Text></TouchableOpacity>
    <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text style={styles.text}>{question.EnglishTranslation}</Text></TouchableOpacity>
  </CardFlip>
  <View style={styles.row}>
  <TouchableOpacity
	style={styles.button} onPress={decrementValue}>
    <FontAwesomeIcon icon={ faArrowLeft } size={25} style={{alignSelf: 'center', marginTop: 17}}/>
  </TouchableOpacity>
  <View style={styles.numContainer}>
  <Text style={{fontSize: 20}}>{num} / 10</Text>
  </View>
  <TouchableOpacity
	style={styles.button2} onPress={incrementValue}>
    <FontAwesomeIcon icon={ faArrowRight } size={25} style={{alignSelf: 'center', marginTop: 17}}/>
  </TouchableOpacity>
  </View>
  </ImageBackground> 

  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  numContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 60,
    height: 60,
    marginTop: 50,
    marginLeft: -2,
    fontSize: 35,
  },
  cardContainer: {
    marginTop: 100,
    alignSelf: 'center',
    width: 300,
    height: 300,
  },
  card: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    lineHeight: 300,
  },
  background: {
    width: '100%',
    height: '100%'
  },
  button: {
    backgroundColor: 'white',
    marginTop: 50,
    marginLeft: 105,
    width: 60,
    height: 60,
    borderRadius: 3,
    fontSize: 15,
  },
  button2: {
    backgroundColor: 'white',
    marginTop: 50,
    marginLeft: -2,
    width: 60,
    height: 60,
    borderRadius: 3,
    fontSize: 15,
  },
})