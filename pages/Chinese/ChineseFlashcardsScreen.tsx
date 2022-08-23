import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardFlip from 'react-native-card-flip';
import { loadChinese } from '../../Database';

export function ChineseFlashcardsScreen2() {

  const navigation = useNavigation();
  
  return(
  <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
    <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text style={styles.text}>Question</Text></TouchableOpacity>
    <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text style={styles.text}>Answer</Text></TouchableOpacity>
  </CardFlip>
  );
}
const styles = StyleSheet.create({
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
  }
})