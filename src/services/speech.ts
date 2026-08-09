import * as Speech from 'expo-speech';
import { Config } from '../constants/config';
import { SpeechOptions } from '../types';

export const speak = (text: string, options?: SpeechOptions) => {
  Speech.stop();
  Speech.speak(text, {
    language: options?.language || Config.speechDefaults.language,
    pitch: options?.pitch || Config.speechDefaults.pitch,
    rate: options?.rate || Config.speechDefaults.rate,
  });
};

export const stopSpeech = () => {
  Speech.stop();
};