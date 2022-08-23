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
    }
      
});

const LearnScreen2= ({ navigation }) => {
    return (
        <ImageBackground
        source={require('../../images/bluebackground.webp')}
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