import { Link } from 'react-router-dom';
import logo from '../../images/virna-logo.svg';
import menu from '../../images/icon_menu.svg';
import like from '../../images/icon_like.svg';
import cart from '../../images/icon_cart.svg';
import instagram from "../../images/icon_camera.svg";
import styles from "./PromoHeader.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.nav}>
        <Link className={styles.navLink}>
          <img src={menu} alt="menu" height="20" width= "20" />
        </Link>
        <Link>
          <img src={like} alt="favourite" height="20" width= "20"/>
        </Link>
        <Link>
          <img src={instagram} alt="instagram icon" height="20" width= "20"/>
        </Link>
        <Link>
          <img src={cart} alt="cart" height="20" width= "20" />
        </Link> 
      </div>
      
    </header>
  );
};
export default Header;