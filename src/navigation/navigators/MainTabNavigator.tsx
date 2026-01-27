import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../../screens/HomeScreen'
import StoreScreen from '../../screens/StoreScreen'

import FontAwesome from '@react-native-vector-icons/fontawesome'
import { MainRoutes } from '../Routes'

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      // safeAreaInsets={{ bottom: 0 }}   // ✅ yahan

      screenOptions={{
        tabBarActiveTintColor: "#1E88E5",
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 0,
          height: 60,
        },

      }}
    >
      <Tab.Screen
        name={MainRoutes.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={MainRoutes.Store}
        component={StoreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-cart" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
