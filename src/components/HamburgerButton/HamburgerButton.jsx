import React, { useContext } from 'react';
import menu from '../../images/icon_menu.svg';
import closeBtn from "../../images/closeBtn.svg";
import { MenuContext } from '../../context/navState';
import styles from "./HamburgerButton.module.scss"

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

   return (
    <button
      aria-label="Открыть главное меню"
       onClick={clickHandler}
       className={styles.menuButton}
     >
       {isMenuOpen ?
         <img src={closeBtn} alt="menu" height="20" width="20" className={styles.closeBtn}/> :
         <img src={menu} alt="close menu" height="20" width="20" className={styles.openBtn}/>
       }
    </button>
  );
};

export default HamburgerButton;