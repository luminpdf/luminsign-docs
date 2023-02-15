import React from 'react';
export default function Badge({ children, bg }) {
  return (
    <span
      style={{
        padding: '3px 10px',
        color: 'rgb(255, 255, 255)',
        backgroundColor: bg,
        lineHeight: '20px',
        textTransform: 'uppercase',
        boxSizing: 'border-box'
      }}>
      {children}
    </span>
  )
}