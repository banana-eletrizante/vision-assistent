import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface StatusOverlayProps {
  message: string;
  isLoading?: boolean;
}

export function StatusOverlay({ message, isLoading }: StatusOverlayProps) {
  return (
    <View 
      style={styles.container}
      accessible={true}
      accessibilityLiveRegion="polite"
    >
      {isLoading && <ActivityIndicator size="large" color={Colors.primary} style={styles.spinner} />}
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  spinner: {
    marginBottom: 10,
  },
  text: {
    color: Colors.text,
    fontSize: 18,
    textAlign: 'center',
  },
});