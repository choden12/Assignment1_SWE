import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, TabParamList } from './types';

// Importing all screen components used in navigation
import HomeScreen from '../screens/HomeScreen';
import ContactsScreen from '../screens/ContactsScreen';
import ContactDetailScreen from '../screens/ContactDetailScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import NoticeBoardScreen from '../screens/NoticeBoardScreen';
import CampusMapScreen from '../screens/CampusMapScreen';

// Creating Stack and Tab navigators with TypeScript types
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Bottom Tab Navigator (Main App Sections)
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1a5f7a',   // Active tab color
        tabBarInactiveTintColor: '#7f8c8d', // Inactive tab color
        headerShown: false,                 // Hide header for tabs
      }}
    >
      {/* Main tabs of the app */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="NoticeBoard" component={NoticeBoardScreen} />
      <Tab.Screen name="CampusMap" component={CampusMapScreen} options={{ title: 'Campus Map' }} />
    </Tab.Navigator>
  );
}

// Root Stack Navigator (Handles tab navigation + detail screens)
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main tab navigation screen */}
        <Stack.Screen 
          name="HomeTabs" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />

        {/* Contact detail screen (opened from Contacts) */}
        <Stack.Screen 
          name="ContactDetail" 
          component={ContactDetailScreen} 
          options={{ title: 'Contact Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}