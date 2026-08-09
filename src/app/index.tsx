import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { BigButton } from '../components/BigButton';
import { PermissionScreen } from '../components/PermissionScreen';
import { StatusOverlay } from '../components/StatusOverlay';
import { useSceneDescription } from '../hooks/useSceneDescription';
import { useSpeech } from '../hooks/useSpeech';
import { Colors } from '../constants/colors';

export default function HomeScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const { analyzeScene, loading } = useSceneDescription();
  const { speakText } = useSpeech();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return <PermissionScreen onRequestPermission={requestPermission} />;
  }

  const handleCaptureAndAnalyze = async () => {
    if (!cameraRef.current || loading) return;

    try {
      setStatusMessage('Capturando imagem...');
      speakText('Analisando ambiente, aguarde...');

      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.5,
        base64: false,
      });

      if (photo?.uri) {
        const description = await analyzeScene(photo.uri);
        setStatusMessage(description);
        speakText(description);
      }
    } catch (error) {
      const errorMsg = 'Não foi possível analisar a imagem. Tente novamente.';
      setStatusMessage(errorMsg);
      speakText(errorMsg);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView style={StyleSheet.absoluteFill} ref={cameraRef} />

      <View style={styles.buttonContainer}>
        <BigButton
          title={loading ? 'Analisando...' : 'TOQUE PARA DESCREVER A CENA'}
          onPress={handleCaptureAndAnalyze}
          disabled={loading}
        />
      </View>

      {statusMessage && (
        <StatusOverlay message={statusMessage} isLoading={loading} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  buttonContainer: {
    flex: 1,
    zIndex: 10,
  },
});