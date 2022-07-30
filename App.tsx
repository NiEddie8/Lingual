/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class App extends React.Component {

  signupPressed = ()=>{
    Alert.alert("Completed Sign Up")
  }

  loginPressed = ()=> {
    Alert.alert("Completed Login!")
  }

  render() {
    return (
      <ImageBackground
        source={require('./images/background.jpeg')}
        style={styles.background}
      >
        <View>
          <Image
            source={require('./images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
          <TouchableOpacity 
            onPress={this.signupPressed}
          >
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.loginPressed}
          >
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    logo:{
      marginLeft: '-15%',
      marginTop: '5%',
      width: 500,
      height: 500,
    },
    signup: {
      backgroundColor: 'white',
      color: '#3A59FF',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '5%'
    },
    login: {
      backgroundColor: '#3A59FF',
      color: 'white',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '10%'
    }
});