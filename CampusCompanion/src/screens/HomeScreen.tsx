import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../navigation/types';

// Navigation type for Home screen (Bottom Tabs)
type HomeScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Home'>;

export default function HomeScreen() {

  // Navigation hook for tab navigation
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Get screen width and height for responsive layout
  const { width, height } = useWindowDimensions();

  // Check if device is in landscape mode
  const isLandscape = width > height;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={[styles.container, isLandscape && styles.landscapeContainer]}>

        {/* App Title */}
        <Text style={styles.title}> College of Science & Technology</Text>

        {/* App Subtitle */}
        <Text style={styles.subtitle}>Campus Companion</Text>

        {/* Menu Grid */}
        <View style={styles.menuGrid}>

          {/* Contacts Section */}
          <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate('Contacts')}>
            <Text style={styles.cardEmoji}>📞</Text>
            <Text style={styles.cardTitle}>Contacts</Text>
            <Text style={styles.cardDesc}>Staff & departments</Text>
          </TouchableOpacity>

          {/* Schedule Section */}
          <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate('Schedule')}>
            <Text style={styles.cardEmoji}>📅</Text>
            <Text style={styles.cardTitle}>Schedule</Text>
            <Text style={styles.cardDesc}>Class timetable</Text>
          </TouchableOpacity>

          {/* Notice Board Section */}
          <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate('NoticeBoard')}>
            <Text style={styles.cardEmoji}>📢</Text>
            <Text style={styles.cardTitle}>Notice Board</Text>
            <Text style={styles.cardDesc}>Announcements</Text>
          </TouchableOpacity>

          {/* Campus Map Section */}
          <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate('CampusMap')}>
            <Text style={styles.cardEmoji}>🗺️</Text>
            <Text style={styles.cardTitle}>Campus Map</Text>
            <Text style={styles.cardDesc}>Find your way</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Screen styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f7fc',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  landscapeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a5f7a',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#2c3e50',
    marginBottom: 32,
    fontWeight: '500',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    width: 160,
    alignItems: 'center',
    shadowColor: '#1a5f7a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a5f7a',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});