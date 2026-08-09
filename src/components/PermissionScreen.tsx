import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { AccessibilityHints } from '../constants/accessibility';

interface PermissionScreenProps {
  onRequestPermission: () => void;
}

export function PermissionScreen({ onRequestPermission }: PermissionScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Permissão da Câmera</Text>
      <Text style={styles.description}>
        O assistente visual precisa de acesso à câmera para poder descrever o ambiente ao seu redor.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onRequestPermission}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Conceder Permissão"
        accessibilityHint={AccessibilityHints.permissionButton}
      >
        <Text style={styles.buttonText}>Conceder Permissão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});