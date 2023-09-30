import React from 'react';
import ApiPage from '@theme-original/ApiPage';
import Head from '@docusaurus/Head';

const MapDescription = {
  '/luminsign-docs/api/send-signature-request/': 'Creates and sends a new SignatureRequest with the submitted documents',
};

export default function ApiPageWrapper(props) {
  const { location } = props;
  const description = MapDescription[location.pathname] || 'Luminsign API Documentation';
  return (
    <>
      <Head>
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/luminsign-docs/img/luminsign_logo_square.png" />
      </Head>
      <ApiPage {...props} />
    </>
  );
}
