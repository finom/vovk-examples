import { ImageResponse } from 'next/og';
import ExampleOg from '@/components/ExampleOg';

export const runtime = 'edge';

export const alt = 'Vovk.ts';
export const size = {
  width: 1200,
  height: 600,
};

export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(<ExampleOg image="stream" />, size);
}
