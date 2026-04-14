import React from 'react';
import { View, Text, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ANNOUNCEMENTS = [
  { id: '1', title: '📢 Midterm Exam Schedule', date: 'Apr 20, 2026', body: 'Midterm exams will begin on May 5th. Check the notice board for room allocations.' },
  { id: '2', title: '🔬 Research Symposium', date: 'Apr 18, 2026', body: 'CST Annual Research Symposium on April 28th in the main auditorium. Register by April 25th.' },
  { id: '3', title: '🏆 Hackathon 2026', date: 'Apr 15, 2026', body: '24-hour hackathon on May 10-11. Prizes worth Nu. 50,000. Team registration open.' },
  { id: '4', title: '📖 Library Extended Hours', date: 'Apr 12, 2026', body: 'Library open until 10 PM during exam preparation weeks.' },
  { id: '5', title: '🎓 Guest Lecture: AI in Bhutan', date: 'Apr 10, 2026', body: 'Dr. Sonam Wangchuk will speak on April 30th at 3 PM in Hall A.' },
];

export default function NoticeBoardScreen() {
  const { width } = useWindowDimensions();
  const titleFontSize = width > 600 ? 24 : 18;
  const bodyFontSize = width > 600 ? 16 : 14;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={ANNOUNCEMENTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={[styles.title, { fontSize: titleFontSize }]}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={[styles.body, { fontSize: bodyFontSize }]}>{item.body}</Text>
            </View>
          )}
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#1a5f7a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    color: '#1a5f7a',
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: '#e67e22',
    marginBottom: 10,
    fontWeight: '500',
  },
  body: {
    color: '#34495e',
    lineHeight: 20,
  },
});