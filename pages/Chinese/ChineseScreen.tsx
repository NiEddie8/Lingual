import React from 'react';
import { StyleSheet, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ChineseScreen2() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../images/blueBackground.jpeg')}
      style={styles.background}
    >
      <TouchableOpacity
        style={styles.languageStyle}
        onPress={() => navigation.navigate('Chinese Flashcards')}
      >
        <Text>Flashcards</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.languageStyle}
        onPress={() => navigation.navigate('Chinese Speaking')}
      >
        <Text>Speaking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.languageStyle}
        onPress={() => navigation.navigate('Chinese Writing')}
      >
        <Text>Writing</Text>
      </TouchableOpacity>
    </ImageBackground>

  );
}
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  languageStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 50,
    borderRadius: 10,
    backgroundColor: 'grey',
    marginTop: 80,
    width: '90%',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4
  }
})