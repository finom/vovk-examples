import { Metadata } from 'next';

export type PageMetadata = Omit<Metadata, 'title' | 'description'> & {
  title: string;
  description: string;
};
