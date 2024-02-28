import React from 'react';
import ApiPage from '@theme-original/ApiPage';
import Head from '@docusaurus/Head';

const MapDescription = {
  '/api/send-signature-request/': 'Creates and sends a new Signature Request with the submitted documents',
};

export default function ApiPageWrapper(props) {
  const { location } = props;
  const description = MapDescription[location.pathname] || 'Luminsign API Documentation';
  return (
    <>
      <Head>
        <meta property="og:description" content={description} />
      </Head>
      <ApiPage {...props} />
    </>
  );
}
