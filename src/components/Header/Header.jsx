import { Link } from 'react-router-dom';
import logo from '../../images/virna-logo.svg';
import menu from '../../images/icon_menu.svg';
import like from '../../images/icon_like.svg';
import { ReactComponent as Cart } from '../../images/icon_cart.svg';
import styles from "./Header.module.scss"

const Header = ({ onCartClick }) => {
  return (
    <header className={styles.header}>
      <Link className={styles.headerLink}>
        <img src={menu} alt="menu" height="20" width= "20" />
      </Link>
       <Link className={styles.logoLink}>
        <img src={logo} alt="logo" className={styles.logo} />
        </Link>
      <Link className={styles.headerLink}>
        <img src={like} alt="favourite" height="20" width= "20"/>
      </Link>
      <Cart className={styles.cart}
        onClick={onCartClick}
      />
      <span className={styles.cartSum}>0</span>
      
    </header>
  );
};
export default Header;