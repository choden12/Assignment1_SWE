import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LOCATIONS = [
  {
    id: '1',
    name: 'Main Academic Block',
    description: 'All major lecture halls and faculty offices.',
    mapUrl: 'https://maps.app.goo.gl/XZuWmxx8dUrSLBx68',
  },
  {
    id: '2',
    name: 'Science & Technology Library',
    description: '24/7 study area and digital resources.',
    mapUrl: 'https://maps.app.goo.gl/XZuWmxx8dUrSLBx68',
  },
  {
    id: '3',
    name: 'Computer Science Lab',
    description: 'State-of-the-art computing facilities.',
    mapUrl: 'https://maps.app.goo.gl/XZuWmxx8dUrSLBx68',
  },
  {
    id: '4',
    name: 'Student Canteen',
    description: 'Food court and hangout spot.',
    mapUrl: 'https://maps.app.goo.gl/XZuWmxx8dUrSLBx68',
  },
  {
    id: '5',
    name: 'Sports Complex',
    description: 'Indoor & outdoor games, gymnasium.',
    mapUrl: 'https://maps.app.goo.gl/XZuWmxx8dUrSLBx68',
  },
];

export default function CampusMapScreen() {
  const openMap = (url: string) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }: { item: typeof LOCATIONS[0] }) => (
    <TouchableOpacity style={styles.card} onPress={() => openMap(item.mapUrl)} activeOpacity={0.7}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.mapLink}>Tap to open in Maps</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}> Campus Map & Facilities</Text>
        <FlatList
          data={LOCATIONS}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f7fc',
  },
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a5f7a',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 14,
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    padding: 16,
    paddingBottom: 30,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    alignItems: 'center',
    shadowColor: '#1a5f7a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    fontSize: 48,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a5f7a',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#2c3e50',
    marginBottom: 6,
  },
  mapLink: {
    fontSize: 12,
    color: '#3498db',
    textDecorationLine: 'underline',
  },
});