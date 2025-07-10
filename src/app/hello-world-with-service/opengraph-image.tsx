import { ImageResponse } from 'next/og';
import ExampleOg, { getOgFonts, constants } from '@/components/ExampleOg';

export const { alt, size, contentType } = constants;

export const runtime = 'edge';

export default async function OgImage() {
  return new ImageResponse(<ExampleOg title="Hello World with a Service example" />, {
    ...size,
    ...(await getOgFonts()),
  });
}
