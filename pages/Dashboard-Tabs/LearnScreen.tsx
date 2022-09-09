import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
      },
    Chinese: {
        alignItems: 'center',
        alignSelf: 'center',
        padding: 50,
        borderRadius: 10,
        backgroundColor: 'red',
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
        source={require('../../images/purpleBackground.jpeg')}
        style={styles.background}
        >
         <TouchableOpacity
        style={styles.Chinese}
        onPress={() => navigation.navigate('Chinese')}
      >
        <Text style={{color: 'yellow', fontWeight: 'bold', fontSize: 17}}>Chinese</Text>
      </TouchableOpacity>
      </ImageBackground>
    );
};
export default LearnScreen2;