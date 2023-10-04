import React from 'react';
import ApiDemoPanel from '@theme-original/ApiDemoPanel';
import SignatureRequestMultipart from './signature-request.multipart';

const MultipartMapper = {
  '/signature_request/send': {
    render: () => <SignatureRequestMultipart />
  }
}

export default function ApiDemoPanelWrapper(props) {
  const multipart = MultipartMapper[props.item.path];
  return (
    <>
      <ApiDemoPanel {...props} />
      {
        multipart && (
          <div>
            <span><b>For request with multipart/form-data:</b></span>
            {multipart.render()}
          </div>
        )
      }
    </>
  );
}
