import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';

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
      
});

const LearnScreen2= ({ navigation }) => {
    return (
        <ImageBackground
        source={require('../../images/blueBackground.jpeg')}
        style={styles.background}
        >
         <TouchableOpacity
        style={styles.languageStyle}
        onPress={() => navigation.navigate('Chinese')}
      >
        <Text>Chinese</Text>
      </TouchableOpacity>
        </ImageBackground>
    );
};
export default LearnScreen2;