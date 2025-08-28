'use client';
import { ApiReferenceReact } from '@scalar/api-reference-react';
import '@scalar/api-reference-react/style.css';

function App() {
  return (
    <>
      <style jsx global>{`
        .app-wrapper {
          padding: 0;
        }
      `}</style>
      <ApiReferenceReact
        configuration={{
          url: '/api/static/openapi.json',
          hideModels: true,
          servers: [
            {
              url: 'http://localhost:3000',
              description: 'Localhost',
            },
            {
              url: 'https://vovk-examples.vercel.app',
              description: 'Production',
            },
          ],
        }}
      />
    </>
  );
}

export default App;
