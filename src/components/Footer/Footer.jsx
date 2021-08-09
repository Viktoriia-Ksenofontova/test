import { ReactComponent as Instagram } from "../../images/icon_camera.svg";
import { ReactComponent as Facebook } from "../../images/icon_facebook.svg";
import { ReactComponent as Youtube } from "../../images/icon_youtube.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
       
      <div className={styles.footerContacts}>
        <p>Social</p>
      <ul className={styles.socialList}>
        <li>
          <a href="#" className={styles.socialLink}>
            <Instagram className={styles.socialIcon}/>
          </a>
        </li>
        <li>
          <a href="#" className={styles.socialLink}>
           <Facebook className={styles.socialIcon}/>
          </a>
        </li>
        <li>
          <a href="#" className={styles.socialLink}>
            <Youtube className={styles.socialIcon}/>
          </a>
        </li>
        </ul>
        
        
      </div>
      
     <p className={styles.footerText}>
        &#169; 2021 | All Rights Reserved 
      </p>
    </footer>
    
  )
}
export default Footer;