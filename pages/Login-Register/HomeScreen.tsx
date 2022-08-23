import React from 'react';
import { StyleSheet, ImageBackground, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

export function HomeScreen2() {
    const navigation = useNavigation();
    return(
    
    <ImageBackground
    source={require('../../images/bluebackground.webp')}
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
        The best platform to learn a new language!
        </Text>
        <Button style={styles.button} mode="elevated" buttonColor='purple' textColor='white' onPress={() => navigation.navigate('Login')} >
            Login
        </Button>
        <Button style={styles.button} mode='contained' buttonColor='blue' textColor='white' onPress={() => navigation.navigate('Register')} >
            Sign Up
        </Button>
    </ImageBackground>
    );
}

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
    button: {
        width:325,
        marginVertical: 15,
        alignSelf: 'center',
        borderRadius: 7,
        padding: 3,
    }

    })