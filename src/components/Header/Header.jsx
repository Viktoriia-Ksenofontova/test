import { useRef, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/virna-logo.svg';
import like from '../../images/icon_like.svg';
import { ReactComponent as Cart } from '../../images/icon_cart.svg';

import { MenuContext } from '../../context/navState';
import HamburgerButton from '../HamburgerButton';
import SideMenu from '../SideMenu';

import styles from "./Header.module.scss";


const Header = ({ onCartClick, shoppingListLength }) => {
    
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  
  const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
  };

  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node} >
      <div className={styles.header}>
        <HamburgerButton />
      
       <Link className={styles.logoLink}>
        <img src={logo} alt="logo" className={styles.logo} />
        </Link>
      <Link className={styles.headerLink}>
        <img src={like} alt="favourite" height="20" width= "20"/>
      </Link>
      
        <Cart className={styles.cart}
          onClick={onCartClick}
      />
      <span className={styles.cartSum}>{shoppingListLength}</span>
      </div>
      
      <SideMenu />
      
    </header>
  );
};
export default Header;