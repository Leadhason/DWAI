export type Theme = 'dark' | 'light';

export interface AudioSample {
  id: string;
  label: string;
  title: string;
  description: string;
  src: string; // URL to audio file
  details?: string[]; // Added for the dedicated page
  useCases?: string[]; // Added for the dedicated page
}

export interface ServiceFeature {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details?: string[]; // Added for the dedicated page
}

export type ViewState = 'home' | 'solutions' | 'demos' | 'methodology' | 'contact' | 'privacy' | 'terms';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details?: string[];
}