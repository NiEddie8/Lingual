import React from 'react';
import { StyleSheet, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function FunctionScreen2({navigation, route}) {
  const setId = route.params.setId;
  console.log('setId: ' + setId);
  return (
    <ImageBackground
      source={require('../images/purpleBackground.jpeg')}
      style={styles.background}
    > 
      <TouchableOpacity
        style={styles.languageStyleFirst}
        onPress={() => navigation.navigate('Flashcards', {setId: setId})}
      >
        <Text style={{fontWeight: 'bold'}}>Flashcards</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.languageStyle}
        onPress={() => navigation.navigate('Speaking', {setId: setId})}
      >
        <Text style={{fontWeight: 'bold'}}>Speaking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.languageStyle}
        onPress={() => navigation.navigate('Writing', {setId: setId})}
      >
        <Text style={{fontWeight: 'bold'}}>Writing</Text>
      </TouchableOpacity>
    </ImageBackground>

  );
}
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  languageStyleFirst: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 140,
    width: '90%',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4
  },
  languageStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 80,
    width: '90%',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4
  }
})