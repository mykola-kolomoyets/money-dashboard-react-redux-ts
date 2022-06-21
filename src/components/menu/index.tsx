import React from "react";
import cn from "classnames";

import { hoc } from "../../utils/hoc";

import useMenu from "./menu.hook";

import styles from "./menu.module.scss";
import { Link } from "react-router-dom";

const Menu = hoc(useMenu, ({ menuItems, activeMenuItem, onMenuItemClick }) => (
  <aside className={styles.menu}>
    <h1 className={styles.menu__title}>LOGO</h1>

    <ul className={styles.menu__list}>
      {menuItems.map(({ label, Icon, to }, index) => (
        <li
          key={label}
          className={cn(styles.menu__item, {
            [styles.menu__item_active]: activeMenuItem === index
          })}
          onClick={() => onMenuItemClick(index)}
        >
          <Link to={to}>
            <Icon />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </aside>
));

export default Menu;
