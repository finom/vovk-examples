import { ImageResponse } from 'next/og';
import ExampleOg, { getOgFonts } from '@/components/ExampleOg';
import { metadata } from './page';

export const runtime = 'edge';

export const alt = 'Vovk.ts';
export const size = {
  width: 1200,
  height: 600,
};

export const contentType = 'image/png';

export default async function OgImage() {
  return new ImageResponse(<ExampleOg title={metadata.title} />, {
    ...size,
    ...(await getOgFonts()),
  });
}
