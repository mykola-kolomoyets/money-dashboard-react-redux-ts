import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { navbarItems } from './navbar-constants';

import styles from './navbar.module.scss';

const Navbar: FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  const navigate = useNavigate();

  const onNavItemClick = (to: string, index: number) => {
    setActiveItem(index);
    navigate(to);
  };

  return (
    <nav className="mt-8 pr-4">
      <div className="mb-6">LOGO</div>

      <ul className="list-none">
        {navbarItems.map(({ to, title, Icon }, index) => (
          <li
            key={to}
            className={`text-gray-800 text-xl border-l-4 border-white pt-xs pb-xs pl-m mb-s cursor-pointer flex items-center ${
              index === activeItem ? 'border-l-4 border-l-myBlue-500' : ''
            }`}
            onClick={() => onNavItemClick(to, index)}
          >
            <div className="mr-s">
              <Icon
                size={36}
                color={index === activeItem ? '#69ADFF' : '#8C8D9C'}
              />
            </div>

            <p className={styles.navbar__item_title}>{title}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
