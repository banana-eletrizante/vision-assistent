import { useState } from 'react';
import { describeImage } from '../services/ai/gemini';
import { uriToBase64 } from '../utils/helpers';

export function useSceneDescription() {
  const [loading, setLoading] = useState(false);

  const analyzeScene = async (imageUri: string): Promise<string> => {
    setLoading(true);
    try {
      const base64 = await uriToBase64(imageUri);
      const description = await describeImage(base64);
      return description;
    } catch (error) {
      console.error('Erro na análise de cena:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { analyzeScene, loading };
}