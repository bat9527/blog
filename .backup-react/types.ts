export interface Frontmatter {
  title: string;
  subtitle: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  thumbnailUrl: string;
  featured?: boolean;
}

export interface Post extends Frontmatter {
  id: string;
  content: string; // The markdown body
  claps: number; // Keeping for engagement simulation
  comments: number;
}

export interface Topic {
  id: string;
  name: string;
}
