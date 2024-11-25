import React from 'react';

interface RightChevronProps {
  strokeColor?: string;
}

const RightChevron: React.FC<RightChevronProps> = ({ strokeColor = '#222222' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6L15 12L9 18" stroke={strokeColor} />
</svg>
);

export default RightChevron;