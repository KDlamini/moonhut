'use client';

import Container from "@/components/layout/Container";
import Logo from '@/components/atoms/Logo/Logo';
import Search from '@/components/molecules/Search/Search';
import UserMenu from "@/components/molecules/UserMenu/UserMenu";

const Header = () => {

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
            <Logo src="/images/logo.png" className="border-[1px] rounded" />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;
