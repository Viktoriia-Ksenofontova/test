import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuContext } from '../../context/navState';
import styles from "./SideMenu.module.scss"


const SideMenu = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  return (
    <nav className={isMenuOpen? styles.menuOpen : styles.menu}>
      <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink} onClick={toggleMenuMode}>
        Главная
      </NavLink>
      <NavLink to="/catalog" className={styles.link} activeClassName={styles.activeLink} onClick={toggleMenuMode}>
        Каталог
      </NavLink>
      <NavLink to="/about" className={styles.link} activeClassName={styles.activeLink} onClick={toggleMenuMode}>
        О сайте
      </NavLink>
      
    </nav>);
};

export default SideMenu;