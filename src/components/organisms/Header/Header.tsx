'use client';

import { FC } from 'react';
import Container from "@/components/layout/Container";
import Logo from '@/components/atoms/Logo/Logo';
import Search from '@/components/molecules/Search/Search';

interface HeaderProps {}

const items = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

const Header: FC<HeaderProps> = () => {

  return (
    <header className="header fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div 
            className="
              flex 
              flex-row 
              items-center 
              justify-between
              gap-3
              md:gap-0
            "
          >
            <Logo src="/images/logo.png" className="hidden md:block cursor-pointer border-[1px] rounded" />
            <Search />
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;
