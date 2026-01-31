
export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
}

export interface GroundingSource {
  title?: string;
  uri?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  sources?: GroundingSource[];
}
