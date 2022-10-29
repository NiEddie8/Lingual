import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'

    const styles = StyleSheet.create({
        background: {
          width: '100%',
          height: '100%'
        },
        logo: {
          marginTop: 50,
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
            fontWeight: 'bold',
            lineHeight: 26,
            color: 'white',
            textAlign: 'center',
            marginBottom: 20,
        },
    })

    const DashboardScreen2= ({ navigation }) => {
        return (
            <ImageBackground
            source={require('../../images/purpleBackground.jpeg')}
            style={styles.background}
            >
                <TouchableOpacity style={{marginTop: 50, marginLeft: 325}} onPress={() => navigation.navigate('Home')}>
                <FontAwesomeIcon icon={ faRightFromBracket } color='white' size={30}/>
                </TouchableOpacity>
                <Image
                    source={require('../../images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                >
                </Image>
                <Text style={styles.header}>Lingual</Text>

                <Text style={styles.normalText}>
                Personalized Language Learning App
                </Text>
            </ImageBackground>
        );
    };
    
    export default DashboardScreen2;