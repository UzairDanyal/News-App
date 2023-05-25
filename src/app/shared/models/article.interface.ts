import { Isource } from './source.interface';

export interface Iarticle {
  source: Isource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
