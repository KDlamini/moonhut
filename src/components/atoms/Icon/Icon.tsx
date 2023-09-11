"use client"

import React from 'react';

interface IconProps {
  name: string;
  className?: string; 
}

const Icon: React.FC<IconProps> = ({ name, className }) => {

  return (
    <svg className={`icon ${className}`}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
