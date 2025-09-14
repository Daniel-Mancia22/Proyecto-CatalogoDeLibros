export interface Work {
  key: string;
  title: string;
  authors: { name: string }[];
  cover_id: number;
  subject: string[];
}
  
export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  subject: string;
}

export interface Work {
  key: string;
  title: string;
  authors?: { name: string }[];
  cover_id: number;
  subject?: string[];
  first_publish_year?: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  subject: string;
  publishYear?: number;
}