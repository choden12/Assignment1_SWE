import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

// Define route type for Contact Detail screen
type ContactDetailRouteProp = RouteProp<RootStackParamList, 'ContactDetail'>;

export default function ContactDetailScreen() {

  // Get route parameters (contact data passed from previous screen)
  const route = useRoute<ContactDetailRouteProp>();
  const { contact } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Contact name */}
        <Text style={styles.name}>{contact.name}</Text>

        {/* Phone information card */}
        <View style={styles.infoCard}>
          <Text style={styles.label}>📞 Phone</Text>

          {/* Tap to call phone number */}
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${contact.phone}`)}>
            <Text style={styles.link}>{contact.phone}</Text>
          </TouchableOpacity>
        </View>

        {/* Email information card */}
        <View style={styles.infoCard}>
          <Text style={styles.label}>✉️ Email</Text>

          {/* Tap to send email */}
          <TouchableOpacity onPress={() => Linking.openURL(`mailto:${contact.email}`)}>
            <Text style={styles.link}>{contact.email}</Text>
          </TouchableOpacity>
        </View>

      </View>
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