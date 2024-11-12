import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import SearchIcon from '../../assests/search-icon.svg'

const searchBarStyles = cva([
  'w-[343px]',
  'h-[44px]',
  'pt-[10px]',
  'pb-[10px]',
  'pl-[14px]',
  'pr-[165px]',
  'rounded-[16px]',
  'border',
  'border-[rgba(150,154,163,0.30)]',
  'inline-flex',
  'items-center',
  'gap-[10px]', // Gap between the icon and input

]);

const inputStyles = cva([
  'w-full',
  'h-full',
  'bg-transparent',
  'text-[rgba(150,154,163,0.30)]',
  'text-body',
  'font-montserrat',
  'font-medium',
  'outline-none',
  'placeholder:text-body',
  'placeholder-rgba(165, 164, 164, 0.5)'
]);

// Define the component
const SearchBar: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const [placeholder, setPlaceholder] = useState('Search...');

  return (
    <div className={searchBarStyles()}>
      <div>
        <SearchIcon/>
      </div>
      <input
        type="text"
        className={inputStyles()}
        placeholder={placeholder}
        onFocus={() => setPlaceholder('')}     // Clear the placeholder on focus
        onBlur={() => setPlaceholder('Search...')}  // Restore the placeholder on blur
        {...props}
      />
    </div>
  );
};

export default SearchBar;
