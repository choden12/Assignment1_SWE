import React from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Weekly timetable data
const TIMETABLE = [
  { day: 'Monday', courses: ['09:00 - 10:30 Discrete Mathematics', '11:00 - 12:30 Software Engineering', '14:00 - 15:30 Programming Lab'] },
  { day: 'Tuesday', courses: ['10:00 - 12:00 Database', '13:00 - 14:30 Operating system', '15:00 - 16:00 Academic Skills'] },
  { day: 'Wednesday', courses: ['09:00 - 10:30 Discrete Mathematics', '11:00 - 13:00 : Discrete Mathematics', '14:00 - 15:30 Database '] },
  { day: 'Thursday', courses: ['10:00 - 12:00 Database', '13:00 - 14:30 Software Engineering', '15:00 - 16:30 Academic Skills'] },
  { day: 'Friday', courses: ['09:00 - 10:30 Programming lab', '11:00 - 12:30 Discrete Mathematics', '14:00 - 15:30 Operating System'] },
  { day: 'Saturday', courses: ['01:00 - 02:30 : Campus cleaning'] },
  { day: 'Sunday', courses: ['Free Hours'] },
];

export default function ScheduleScreen() {

  // Get screen width for responsive design
  const { width } = useWindowDimensions();

  // Check if device is small for UI adjustments
  const isSmallDevice = width < 380;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>

        {/* Screen header */}
        <Text style={[styles.header, isSmallDevice && styles.smallHeader]}>
          Weekly Schedule
        </Text>

        {/* Render timetable by day */}
        {TIMETABLE.map((item, idx) => (
          <View key={idx} style={styles.dayCard}>

            {/* Day name */}
            <Text style={styles.dayTitle}>{item.day}</Text>

            {/* Courses for the day */}
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

// Screen styles
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