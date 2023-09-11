'use client';

import Link from 'next/link';
import React from 'react';

interface NavigationMenuItem {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavigationMenuItem[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ items }) => {
  return (
    <nav className="navigation-menu">
      <ul className="navigation-menu_list">
        {items.map((item, index) => (
          <li key={index} className="navigation-menu_item">
            <Link href={item.href}>
              <a className="navigation-menu_link">{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
