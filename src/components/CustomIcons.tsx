import React from 'react';

export const TiktokIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none"
    className={className}
    stroke="currentColor"
  >
    <path
      d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 19.59 4h-3.67v9.4a3 3 0 1 1-2-2.83V7.5a7.35 7.35 0 0 0-2.07.42 8 8 0 1 0 8.75-2.1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const XIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
  >
    <path
      d="M4 4l7.2 9.9L4 20h2.3l5.6-5.2l4.5 5.2h4.2l-7.8-9.9L19.5 4h-2.3l-5 4.7L8.2 4H4zm3.7 1.3h2.3l8.3 13.4h-2.3L7.7 5.3z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);