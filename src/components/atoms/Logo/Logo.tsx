"use client"

import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

interface LogoProps {
  src: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, className }) => {
  const router = useRouter();

  return (
    <Image 
      src={src}
      alt="Logo"
      className={`logo ${className}`}
      width={120}
      height={60}
      onClick={() => router.push('/')}
    />
  );
};

export default Logo;