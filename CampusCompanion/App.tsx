import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation';

// Root App component (entry point of the application)
export default function App() {
  return (
    // Safe area provider ensures proper layout on all devices (notch, status bar, etc.)
    <SafeAreaProvider>
      
      {/* Main app navigation container */}
      <AppNavigator />

    </SafeAreaProvider>
  );
}