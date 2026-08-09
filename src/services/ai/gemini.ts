import { GoogleGenerativeAI } from '@google/generative-ai';
import { Config } from '../../constants/config';

const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

/**
 * Envia uma imagem em Base64 para o Gemini descrever com foco em acessibilidade
 */
export async function describeImage(base64Image: string): Promise<string> {
  if (!apiKey) {
    throw new Error('Chave da API do Gemini não configurada.');
  }

  const model = genAI.getGenerativeModel({ model: Config.geminiModel });

  const prompt = 
    'Descreva o que está nesta imagem de forma sucinta, clara e acessível para uma pessoa cega ou com baixa visão. ' +
    'Foque nos elementos principais, obstáculos próximos ou textos visíveis. Responda em português em no máximo 3 frases.';

  const imagePart = {
    inlineData: {
      data: base64Image,
      mimeType: 'image/jpeg',
    },
  };

  const result = await model.generateContent([prompt, imagePart]);
  const response = await result.response;
  return response.text();
}