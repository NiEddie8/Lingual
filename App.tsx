import * as React from 'react';
import { Button, View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen2 } from './pages/Login-Register/LoginScreen';
import { HomeScreen2 } from './pages/Login-Register/HomeScreen';
import { RegisterScreen2 } from './pages/Login-Register/RegisterScreen';
import DashboardScreen2 from './pages/Dashboard-Tabs/DashboardScreen';
import LearnScreen2 from './pages/Dashboard-Tabs/LearnScreen';
import { ChineseScreen2 } from './pages/Chinese/ChineseScreen';
import { ChineseFlashcardsScreen2 } from './pages/Chinese/ChineseFlashcardsScreen';
import { ChineseSpeakingScreen2 } from './pages/Chinese/ChineseSpeakingScreen';
import { ChineseWritingScreen2 } from './pages/Chinese/ChineseWritingScreen';
import CreateScreen2 from './pages/Dashboard-Tabs/CreateScreen';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { Colors } from 'react-native/Libraries/NewAppScreen';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return <HomeScreen2/>;
}

function LoginScreen({ navigation }) {
  return <LoginScreen2/>;
}

function RegisterScreen({ navigation }) {
  return <RegisterScreen2/>;
}

function DashboardTabScreen({ navigation }) {
  return(
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarLabel: 'false',
        tabBarStyle: {
          position: 'absolute',
          marginBottom: 30,
          marginLeft: 20,
          marginRight: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
        }
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={ faHome } color={color} size={25} style={{marginTop:10}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Learn"
        component={LearnScreen}
        options={{
          tabBarLabel: 'Learn',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={ faGraduationCap } color={color} size={25} style={{marginTop:10}}/>
          ),
        }}
      />
       <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={ faPlus } color={color} size={25} style={{marginTop:10}}/>
          ),
        }}
      />
    </Tab.Navigator>

  );
}

function DashboardScreen({ navigation }) {
  return DashboardScreen2({navigation});
}

function LearnScreen({ navigation }) {
  return LearnScreen2({navigation});
}

function CreateScreen({ navigation }) {
  return CreateScreen2({navigation});
}


function ChineseScreen({ navigation }) {
  return <ChineseScreen2/>;
}

function ChineseFlashcardsScreen({ navigation }) {
  return <ChineseFlashcardsScreen2/>;
}

function ChineseSpeakingScreen({ navigation }) {
  return <ChineseSpeakingScreen2/>;
}

function ChineseWritingScreen({ navigation }) {
  return <ChineseWritingScreen2/>;
}

export default function App() {
  return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTransparent: true, headerTintColor: 'white' }}>
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Login" component={LoginScreen}/>
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen
              name="DashboardTabs"
              component={DashboardTabScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Chinese" component={ChineseScreen} />
            <Stack.Screen name="Chinese Flashcards" component={ChineseFlashcardsScreen} />
            <Stack.Screen name="Chinese Speaking" component={ChineseSpeakingScreen} />
            <Stack.Screen name="Chinese Writing" component={ChineseWritingScreen} />
            </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
});