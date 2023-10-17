import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import HistoryListScreen from '../screens/HistoryListScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarActiveTintColor: '#005B41',
          tabBarInactiveTintColor: '#aaa',
          tabBarStyle: {
            height: 80,
            paddingTop: 10,
            backgroundColor: '#eee',
          },
          tabBarLabelStyle: {
            fontSize: 10,
          },
          tabBarIcon: ({ color }) => {
            const getIconName = () => {
              if (route.name === 'History') return 'time';
              return 'home';
            };
            const iconName = getIconName();
            return <Ionicons name={iconName} color={color} size={20} />;
          },
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryListScreen} />
    </Tab.Navigator>
  );
}
