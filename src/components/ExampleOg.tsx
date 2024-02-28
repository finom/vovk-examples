/* eslint-disable @next/next/no-img-element */
const path = process.env.VERCEL_ENV ? `https://vovk-examples.vercel.app/og` : `http://localhost:${process.env.PORT}/og`;

interface Props {
  image: string;
}

export default function ExampleOg({ image }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        gap: '0',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f8fafc',
      }}
    >
      <img
        src={`${path}/vovk-text-logo.png`}
        alt="About Acme"
        width="30%"
        style={{ marginTop: '20px', marginBottom: '40px' }}
      />
      <img src={`${path}/${image}.png`} alt="About Acme" width="90%" />
    </div>
  );
}
