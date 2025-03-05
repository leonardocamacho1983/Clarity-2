export interface User {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'basic' | 'premium';
  createdAt: string;
}

export interface JournalEntry {
  id: string;
  userId: string;
  content: string;
  aiInsights?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Plan {
  id: 'free' | 'basic' | 'premium';
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  recommended?: boolean;
}
