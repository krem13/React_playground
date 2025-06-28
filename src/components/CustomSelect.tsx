import React from 'react';
import { CustomSelectProps } from '../types/leaderboard.interface';

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select a game',
}) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={handleChange}
        className="w-full h-12 p-2 pr-10 border border-gray-300 bg-white text-gray-500 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* Custom arrow */}
      <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 border-l-2 border-gray-400 pl-2 h-6 flex items-center">
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  );
};

export default CustomSelect;