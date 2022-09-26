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
import { FunctionScreen2 } from './pages/FunctionScreen';
import { FlashcardsScreen2 } from './pages/FlashcardsScreen';
import { SpeakingScreen2 } from './pages/SpeakingScreen';
import { WritingScreen2 } from './pages/WritingScreen';
import CreateScreen2 from './pages/Dashboard-Tabs/CreateScreen';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'



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


function FunctionScreen({ navigation, route }) {
  return FunctionScreen2({navigation, route});
}

function FlashcardsScreen({ navigation, route }) {
  return FlashcardsScreen2({ navigation, route });
}

function SpeakingScreen({ navigation, route }) {
  return SpeakingScreen2({ navigation, route });
}

function WritingScreen({ navigation, route }) {
  return WritingScreen2({ navigation, route });
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
            <Stack.Screen name="Function" component={FunctionScreen} />
            <Stack.Screen name="Flashcards" component={FlashcardsScreen} />
            <Stack.Screen name="Speaking" component={SpeakingScreen} />
            <Stack.Screen name="Writing" component={WritingScreen} />
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