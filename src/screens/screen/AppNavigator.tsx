// src/navigation/AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '/home/alunos/Documentos/projetoMobile/DDMTemplate-features/src/screens/screen/HomeScreen.tsx';
import LoginScreen from '/home/alunos/Documentos/projetoMobile/DDMTemplate-features/src/screens/screen/LoginScreen.tsx';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
