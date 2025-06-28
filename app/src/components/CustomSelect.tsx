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
    <select
      value={value}
      onChange={handleChange}
      className='w-full h-12 p-2 border border-gray-30 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400'
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
  );
};

export default CustomSelect;