import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
      },
    Chinese: {
        alignItems: 'center',
        alignSelf: 'center',
        width: 350,
        height: 220,
        borderRadius: 10,
        marginTop: 80,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 0.4
    },
      
});

const LearnScreen2= ({ navigation }) => {
    return (
        <ImageBackground
        source={require('../../images/purpleBackground.jpeg')}
        style={styles.background}
        >
         <TouchableOpacity
        onPress={() => navigation.navigate('Chinese')}
      >
        <Image
                style={styles.Chinese}
                source={require('../../images/chineseFlag.png')}
            >
            </Image>
      </TouchableOpacity>
      </ImageBackground>
    );
};
export default LearnScreen2;