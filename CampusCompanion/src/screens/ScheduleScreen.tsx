import React from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TIMETABLE = [
  { day: 'Monday', courses: ['09:00 - 10:30 Mathematics', '11:00 - 12:30 Physics', '14:00 - 15:30 Programming Lab'] },
  { day: 'Tuesday', courses: ['10:00 - 12:00 Computer Science', '13:00 - 14:30 Chemistry', '15:00 - 16:00 Tutorial'] },
  { day: 'Wednesday', courses: ['09:00 - 10:30 Mathematics', '11:00 - 13:00 Electronics Lab', '14:00 - 15:30 English'] },
  { day: 'Thursday', courses: ['10:00 - 12:00 Physics', '13:00 - 14:30 Computer Science', '15:00 - 16:30 Workshop'] },
  { day: 'Friday', courses: ['09:00 - 10:30 Chemistry', '11:00 - 12:30 Mathematics', '14:00 - 15:00 Seminar'] },
];

export default function ScheduleScreen() {
  const { width } = useWindowDimensions();
  const isSmallDevice = width < 380;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={[styles.header, isSmallDevice && styles.smallHeader]}>📚 Weekly Schedule</Text>
        {TIMETABLE.map((item, idx) => (
          <View key={idx} style={styles.dayCard}>
            <Text style={styles.dayTitle}>{item.day}</Text>
            {item.courses.map((course, cIdx) => (
              <View key={cIdx} style={styles.courseRow}>
                <Text style={styles.courseText}>{course}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
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
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a5f7a',
    marginBottom: 20,
    textAlign: 'center',
  },
  smallHeader: {
    fontSize: 22,
  },
  dayCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a5f7a',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0f0f8',
    paddingBottom: 6,
  },
  courseRow: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  courseText: {
    fontSize: 16,
    color: '#2c3e50',
  },
});