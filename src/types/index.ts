export interface AnalysisState {
  isLoading: boolean;
  error: string | null;
  description: string | null;
}

export interface SpeechOptions {
  language?: string;
  pitch?: number;
  rate?: number;
}