import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

export function LoginScreen2() {

  const navigation = useNavigation();
  let [emailAddress, setEmailAddress] = useState('');
  let [password, setPassword] = useState('');

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
          <Text style={styles.text}>
            Welcome!
          </Text>
        <TextInput style={styles.textInput} 
          placeholder='Email'
          placeholderTextColor={'grey'}
          keyboardType = {'email-address'}
          autoCapitalize = {'none'}
          autoCorrect = {false}
          onChangeText={
            (emailAddress) => setEmailAddress(emailAddress)
          }
        />
        <TextInput style={styles.textInput}
          placeholder='Password'
          placeholderTextColor={'grey'}
          autoCapitalize = {'none'}
          autoCorrect = {false}
          onChangeText={
            (password) => setPassword(password)
          }
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
             <Text style={styles.touchableOpacity}>Create an Account</Text>
        </TouchableOpacity>
         <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('DashboardTabs')} >
            <Text style={{color: 'black'}}>Login</Text>
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
    width: 350,
    height: 350,
    alignSelf: 'center',
    marginTop: 60,
  },
  textInput: {
    backgroundColor: 'white',
    width: 325,
    marginVertical: 10,
    padding: 20,
    borderRadius: 7,
    fontSize: 15,
    alignSelf: 'center',
  },
  text: {
    fontSize: 26,
    textAlign:'center', 
    color: 'white',
    fontWeight: 'bold',
    marginTop: -50,
    marginBottom: 40
  },
  button: {
    backgroundColor: 'white',
    width: 325,
    marginVertical: 50,
    padding: 5,
    borderRadius: 7,
    fontSize: 15,
    alignSelf: 'center',
},
  touchableOpacity: {
    color: 'white',
    alignSelf: 'flex-end',
    marginRight: 30,
    fontSize: 15,
    fontWeight: 'bold',
  }
})