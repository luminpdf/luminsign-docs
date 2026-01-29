import React, { useEffect, useState } from 'react';

export default function ApiHeaderNotice() {

  function setInputLikeUser(input, value) {
    const nativeInputValueSetter =
      Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      ).set;
  
    nativeInputValueSetter.call(input, value);
  
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  useEffect(() => {
    setTimeout(() => {
      setInputLikeUser(document.getElementsByName('X-Lumin-API-Version')[0], '1.1');
    }, 1000);
  }, []);

  return (
    <></>
  );
}
