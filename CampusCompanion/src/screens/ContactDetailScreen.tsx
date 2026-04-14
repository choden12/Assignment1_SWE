import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type ContactDetailRouteProp = RouteProp<RootStackParamList, 'ContactDetail'>;

export default function ContactDetailScreen() {
  const route = useRoute<ContactDetailRouteProp>();
  const { contact } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.name}>{contact.name}</Text>
        <View style={styles.infoCard}>
          <Text style={styles.label}>📞 Phone</Text>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${contact.phone}`)}>
            <Text style={styles.link}>{contact.phone}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.label}>✉️ Email</Text>
          <TouchableOpacity onPress={() => Linking.openURL(`mailto:${contact.email}`)}>
            <Text style={styles.link}>{contact.email}</Text>
          </TouchableOpacity>
        </View>
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
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a5f7a',
    marginBottom: 24,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  link: {
    fontSize: 18,
    color: '#3498db',
    textDecorationLine: 'underline',
  },
});