import { ImageResponse } from 'next/og';
import ExampleOg, { getOgFonts, constants } from '@/components/ExampleOg';

export const { alt, size, contentType } = constants;

export const runtime = 'edge';

export default async function OgImage() {
  return new ImageResponse(<ExampleOg title="Vercel AI SDK example" />, {
    ...size,
    ...(await getOgFonts()),
  });
}
