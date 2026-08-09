import { useCallback } from 'react';
import { speak, stopSpeech } from '../services/speech';

export function useSpeech() {
  const speakText = useCallback((text: string) => {
    speak(text);
  }, []);

  const stop = useCallback(() => {
    stopSpeech();
  }, []);

  return { speakText, stop };
}