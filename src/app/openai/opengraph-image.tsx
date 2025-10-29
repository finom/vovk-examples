import { ImageResponse } from 'next/og.js';
import ExampleOg, { getOgFonts, constants } from '@/components/ExampleOg.tsx';

export const { alt, size, contentType } = constants;

export default async function OgImage() {
  return new ImageResponse(<ExampleOg title="OpenAI chat example" />, {
    ...size,
    ...(await getOgFonts()),
  });
}
