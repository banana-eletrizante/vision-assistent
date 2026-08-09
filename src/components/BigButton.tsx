import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { AccessibilityHints } from '../constants/accessibility';

interface BigButtonProps {
  onPress: () => void;
  disabled?: boolean;
  title: string;
}

export function BigButton({ onPress, disabled, title }: BigButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityHint={AccessibilityHints.mainButton}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
});