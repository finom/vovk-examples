import { ImageResponse } from 'next/og';
import ExampleOg, { getOgFonts, constants } from '@/components/ExampleOg';

export const { runtime, alt, size, contentType } = constants;

export default async function OgImage() {
  return new ImageResponse(<ExampleOg title="Yup validation example" />, {
    ...size,
    ...(await getOgFonts()),
  });
}
