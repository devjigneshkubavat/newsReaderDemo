export interface NewsSource {
  id: string | null;
  name: string;
}

export interface NewsArticle {
  id: string; // This is your custom persistent ID (optional until you inject it)
  source: NewsSource;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string; // ISO 8601 format
  content: string;
  isLiked?: boolean;
}
