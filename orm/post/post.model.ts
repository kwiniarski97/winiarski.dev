export type UniquePostAttributes = 'id' | 'link';

export interface Post {
  id: number;
  /**
   * Link is a unique
   */
  link: string;
  title: string;
  summary: string;
  coverImg: string;
  createdAt: number;
  publishedAt: number;
}
