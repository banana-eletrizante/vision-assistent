/**
 * Converte um URI de arquivo local para Base64
 */
export async function uriToBase64(uri: string): Promise<string> {
  const response = await fetch(uri);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result as string;
      // Remove o cabeçalho data:image/jpeg;base64,
      const base64Clean = base64data.split(',')[1];
      resolve(base64Clean);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}