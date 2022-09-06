import React from 'react';
import { StyleSheet, ImageBackground, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

export function HomeScreen2() {
    const navigation = useNavigation();
    return(
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
        <Text style={styles.header}>Lingual</Text>

        <Text style={styles.normalText}>
        The best platform to learn a new language!
        </Text>
        <Button style={styles.button} mode="contained" buttonColor='white' textColor='black' onPress={() => navigation.navigate('Login')} >
            Login
        </Button>
        <Button style={styles.button} mode='contained' buttonColor='white' textColor='black' onPress={() => navigation.navigate('Register')} >
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
      marginTop: 75,
      width: 350,
      height: 350,
      alignSelf: 'center',
    },
    header: {
        fontSize: 26,
        textAlign:'center', 
        color: 'white',
        fontWeight: 'bold',
        marginTop: -50,
        marginBottom: 15,
    },
    normalText: {
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        width:325,
        marginVertical: 15,
        alignSelf: 'center',
        borderRadius: 7,
        padding: 3,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 0.4
    }

    })