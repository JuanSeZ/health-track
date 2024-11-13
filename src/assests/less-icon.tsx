import React from 'react';

interface LessIconProps {
  strokeColor?: string;
}

const LessIcon: React.FC<LessIconProps> = ({ strokeColor = '#222222' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M18 12L6 12" stroke={strokeColor} stroke-linecap="round" />
  </svg>
);

export default LessIcon;
