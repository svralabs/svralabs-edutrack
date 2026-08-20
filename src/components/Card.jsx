import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-surface rounded-md shadow-md p-md ${className}`}>
      {children}
    </div>
  );
}
