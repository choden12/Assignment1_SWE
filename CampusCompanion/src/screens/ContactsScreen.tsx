import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type ContactsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ContactDetail'>;

const CONTACTS = [
  { id: '1', name: 'Dean’s Office', phone: '+97517557867', email: 'dean.cst@rub.edu.bt' },
  { id: '2', name: 'Academic Affairs', phone: '+97517665438', email: 'academics@rub.edu.bt' },
  { id: '3', name: 'IT Support', phone: '+97517658909', email: 'itsupport@rub.edu.bt' },
  { id: '4', name: 'Library', phone: '+97517098909', email: 'library@rub.edu.bt' },
  { id: '5', name: 'Student Service Officer(woman)', phone: '+97517358909', email: 'SSO@rub.edu.bt' },
  { id: '6', name: 'Student Service Officer(man)', phone: '+97517058909', email: 'SSO@rub.edu.bt' },
];

export default function ContactsScreen() {
  const navigation = useNavigation<ContactsScreenNavigationProp>();

  const renderItem = ({ item }: { item: typeof CONTACTS[0] }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => navigation.navigate('ContactDetail', { contact: item })}
      activeOpacity={0.7}
    >
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactPhone}>{item.phone}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={CONTACTS}
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
  list: {
    padding: 16,
    paddingBottom: 20,
  },
  contactItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#1a5f7a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    ...Platform.select({
      ios: {
        borderWidth: 0.5,
        borderColor: '#d0e2f0',
      },
      android: {
        elevation: 2,
      },
    }),
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a5f7a',
    marginBottom: 4,
  },
  contactPhone: {
    fontSize: 14,
    color: '#2c3e50',
  },
});