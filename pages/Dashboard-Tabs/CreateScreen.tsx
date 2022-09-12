import React from 'react';
import { StyleSheet, Text, Image, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
      },
      logo: {
        marginTop: 100,
        width: 350,
        height: 350,
        alignSelf: 'center',
      },
      header: {
          fontSize: 26,
          textAlign:'center', 
          color: 'purple',
          fontWeight: 'bold',
          marginTop: -50,
          marginBottom: 15,
      },
      normalText: {
          fontSize: 16,
          lineHeight: 26,
          color: '#FFFAFA',
          textAlign: 'center',
          marginBottom: 20,
      },
});

const CreateScreen2= ({ navigation }) => {
    return (
        <ImageBackground
        source={require('../../images/purpleBackground.jpeg')}
        style={styles.background}
        >
            <Image
                source={require('../../images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            >
            </Image>
            <Text style={styles.header}>Language Learner</Text>

            <Text style={styles.normalText}>
            Template Screen
            </Text>
        </ImageBackground>
    );
};
export default CreateScreen2;