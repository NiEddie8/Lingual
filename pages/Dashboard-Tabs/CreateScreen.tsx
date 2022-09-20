import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, FlatList, ImageBackground, ScrollView, StatusBar, SafeAreaView, View, Alert } from 'react-native'
import { Button } from 'react-native-paper';
import { createSet } from '../../Database';
import { Translation, UserSet } from '../../model/Types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  background: {
    width: '100%',
    height: '100%'
  },
  header: {
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 80,
  },
  description: {
    fontSize: 17,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 15,
  },
  descriptionHeader: {
    fontSize: 20,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 18,
  },
  textInput: {
    backgroundColor: 'white',
    width: 325,
    marginVertical: 10,
    padding: 20,
    borderRadius: 7,
    fontSize: 15,
    alignSelf: 'center',
  },
  questionAnswer: {
    backgroundColor: 'white',
    marginVertical: 10,
    marginLeft: 12,
    padding: 20,
    borderRadius: 7,
    fontSize: 12,
    alignSelf: 'center',
    flexDirection:'column',
    flex: 1,
  },
  addedTranslation: {
    backgroundColor: 'white',
    width: 157,
    marginVertical: 10,
    marginLeft: 12,
    padding: 20,
    borderRadius: 7,
    fontSize: 12,
    alignSelf: 'center',
  },
  addButton: {
    backgroundColor: '#87ceeb',
    marginVertical: 10,
    marginLeft: 12,
    padding: 5,
    borderRadius: 3,
    alignSelf: 'center',
    flexDirection: 'column',

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

const CreateScreen2 = ({ navigation }) => {
  let [studySetName, setStudySetName] = useState('');
  let [language, setLanguage] = useState('');
  let [character, setCharacter] = useState('');
  let [translation, setTranslation] = useState('');
  let [items, setItems] = useState([] as Translation[])

  const addTranslation = (character: string, translation: string) => {
    const copyOfItems = Object.assign([], items);
    copyOfItems.push(new Translation(character, translation));
    setItems(copyOfItems);
    console.log('Items: ' + JSON.stringify(items));
  };

  const createNewSet = () => {
    if (studySetName === '' || language === '' || items.length === 0) {
      Alert.alert('Error', 'Invalid Input');
      return;
    }
    const userSet = createSet(new UserSet(studySetName, language), items);
    Alert.alert('Success', 'Set created');
    navigation.navigate('Chinese');
  };
  
  return (
    <ImageBackground
      source={require('../../images/purpleBackground.jpeg')}
      style={styles.background}
    >
      <Text style={styles.header}>Create Your Own Study Set</Text>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>


          <Text style={styles.description}>Study Set Name</Text>
          <TextInput style={styles.textInput}
            placeholder='Name'
            placeholderTextColor={'grey'}
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={
              (studySetName) => setStudySetName(studySetName)
            }
          />
          <Text style={styles.description}>Language</Text>
          <TextInput style={styles.textInput}
            placeholder='Language'
            placeholderTextColor={'grey'}
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={
              (language) => setLanguage(language)
            }
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.descriptionHeader}>Character</Text>
            <Text style={styles.descriptionHeader}>Translation</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.questionAnswer}
                  placeholder='Character'
                  placeholderTextColor={'grey'}
                  autoCapitalize={'words'}
                  autoCorrect={false}
                  onChangeText={
                    (character) => setCharacter(character)
                  }
                />
                <TextInput style={styles.questionAnswer}
                  placeholder='Translation'
                  placeholderTextColor={'grey'}
                  autoCapitalize={'words'}
                  autoCorrect={false}
                  onChangeText={
                    (translation) => setTranslation(translation)
                  }
                />
                <Button onPress={() => addTranslation(character, translation)} style={styles.addButton}><Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Add</Text></Button>
            </View>
            <Button onPress={() => createNewSet()} style={styles.submitButton}><Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Submit</Text></Button>

            <View>
              <Text style={styles.description}>Translations in the set</Text>
              <FlatList
              data={items}
              renderItem={({item}) =>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.addedTranslation}>{item.character} </Text>
                <Text style={styles.addedTranslation}>{item.translation} </Text>
              </View>
            }
            />
            </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default CreateScreen2;