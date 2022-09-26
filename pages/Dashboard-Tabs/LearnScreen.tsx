import React, { useEffect, useState } from 'react';
import { loadAllSets, loadSet } from '../../Database';
import { StyleSheet, TouchableOpacity, Text, ImageBackground, Image, FlatList, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { UserSet } from '../../model/Types';


const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  scrollContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  Chinese: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 325,
    height: 220,
    borderRadius: 10,
    marginTop: 40,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4
  },
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 325,
    height: 150,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 40,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4
  },
});

const LearnScreen2 = ({ navigation }) => {

  let [items, setItems] = useState([] as UserSet[])

  useEffect(() => {
    (async () => {
      const allUserSets = await loadAllSets();
      setItems(allUserSets);
      console.log('UserSets: ' + JSON.stringify(items));
    })();
  }, []);

  return (
    <ImageBackground
      source={require('../../images/purpleBackground.jpeg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.scrollContainer}>
        <ScrollView style={styles.scrollView}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, marginLeft:20, marginTop: 20 }}>Main Study Sets</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Function', {setId: 5!})}
          >
            <Image
              style={styles.Chinese}
              source={require('../../images/chineseFlag.png')}
            >
            </Image>
          </TouchableOpacity>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, marginLeft:20, marginTop: 70 }}>User Created Study Sets</Text>
          <FlatList
            data={items}
            renderItem={({ item }) =>
              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate('Function', {setId: item.id!})}
              >
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, lineHeight: 150 }}>{item.name}</Text>
              </TouchableOpacity>
            }
          />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default LearnScreen2;