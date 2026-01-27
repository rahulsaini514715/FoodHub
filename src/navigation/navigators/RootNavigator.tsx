import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text, View } from 'react-native'
import { RootRoutes } from '../Routes';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

const Stack = createNativeStackNavigator();


function RootNavigator() {
  const isAuthentication = true;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
      isAuthentication ? (
        <Stack.Screen name={RootRoutes.MainTabs} component={MainNavigator}/>
      ) : (
        <Stack.Screen name={RootRoutes.AuthStack} component={AuthNavigator}/>
      )
      }
    </Stack.Navigator>
  )
}

export default RootNavigator



