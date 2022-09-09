import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardFlip from 'react-native-card-flip';
import { loadChinese } from '../../Database';
import { Button } from 'react-native-paper';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons/faVolumeHigh'
import { ChineseQuestion } from '../../model/Types';
import Tts from 'react-native-tts';

export function ChineseFlashcardsScreen2() {
  const [num, setNum] = useState(1);
  const [question, setQuestion] = useState({} as ChineseQuestion);
  const [flipCard, setFlipCard] = useState(0);

  const flipCard1 = () => {
    setFlipCard(1 - flipCard);
    this.card.flip();
  }

  
  useEffect(() => {
    const loadQuestion = async () => {
      const question = await loadChinese(num);
      setQuestion(question);
      console.log('Question: ', JSON.stringify(question));
    }
    if(flipCard === 1) {
      flipCard1();
    }
    loadQuestion();
  }, [num]);

    const incrementValue = async () => {
      if(num + 1 <= 10) {
      setNum(num + 1);
      }
    }

    const decrementValue = async() => {
      if(num - 1 >= 1) {
      setNum(num - 1);
      }
    }

  const handleVoice = () => {
    Tts.setDefaultRate(0.1);
    if(flipCard === 0) {
      Tts.setDefaultLanguage('zh-CN');
      Tts.setDefaultVoice('com.apple.ttsbundle.Ting-Ting-compact');
      Tts.speak(question.ChineseCharacter);
    } else {
      Tts.setDefaultLanguage('en-US');
      Tts.setDefaultVoice('com.apple.ttsbundle.Samantha-compact');
      Tts.speak(question.EnglishTranslation);
    }
  }
  const navigation = useNavigation();
 
  return(
  <ImageBackground
  source={require('../../images/purpleBackground.jpeg')}
  style={styles.background}
  >
  <CardFlip style={styles.cardContainer} flipDirection='x' ref={(card) => this.card = card} >
    <TouchableOpacity style={styles.card} onPress={() => flipCard1()} ><Text numberOfLines={1}
    adjustsFontSizeToFit style={styles.text}>{question.ChineseCharacter}</Text></TouchableOpacity>
    <TouchableOpacity style={styles.card} onPress={() => flipCard1()} ><Text numberOfLines={1}
    adjustsFontSizeToFit style={styles.text}>{question.EnglishTranslation}</Text></TouchableOpacity>
  </CardFlip>
  <TouchableOpacity onPress={() => handleVoice()}>
  <FontAwesomeIcon icon={faVolumeHigh} size={37} style={{marginLeft: 240, marginTop: -290, alignSelf: 'center'}}color='black' />
  </TouchableOpacity>
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
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {num === 10 ? (
          <Button onPress={() => navigation.navigate('Chinese')} style={styles.submitButton}><Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Submit</Text></Button>
            ) : null}
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
    marginTop: 40,
    marginLeft: -2,
    fontSize: 35,
  },
  cardContainer: {
    marginTop: 130,
    alignSelf: 'center',
    width: 300,
    height: 300,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4
  },
  card: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 75,
    lineHeight: 300,
  },
  background: {
    width: '100%',
    height: '100%'
  },
  button: {
    backgroundColor: 'white',
    marginTop: 40,
    marginLeft: 105,
    width: 60,
    height: 60,
    borderRadius: 3,
    fontSize: 15,
  },
  button2: {
    backgroundColor: 'white',
    marginTop: 40,
    marginLeft: -2,
    width: 60,
    height: 60,
    borderRadius: 3,
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: '#87ceeb',
    width: 300,
    marginTop: 75,
    padding: 5,
    borderRadius: 3,
    fontSize: 15,
    alignSelf: 'center',
},
})