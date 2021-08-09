import Header from "../../components/Header";
import Catalog from "../Сatalog";

import logo_bonum from '../../images/logo_bonum.svg';
import background_360_image from "../../images/home/360home.jpg";
import background_768_image from "../../images/home/768home.jpg";
import background_960_image from "../../images/home/960home.jpg";
import background_1366_image from "../../images/home/1366home.jpg";
import background_1440_image from "../../images/home/1440home.jpg";
import background_1920_image from "../../images/home/1920home.jpg";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const screenSize = window.innerWidth;
  let imageUrl;
  switch (screenSize) {
    case (screenSize < 768):
      imageUrl= background_360_image;
      break;
    case (screenSize >= 1920):
      imageUrl= background_1920_image;
      break;
    case (screenSize >= 1440):
      imageUrl= background_1440_image;
      break;
    case (screenSize >= 1366):
      imageUrl= background_1366_image;
      break;
    case (screenSize >= 960):
      imageUrl= background_960_image;
      break;
    case (screenSize >= 768):
      imageUrl= background_768_image;
      break;
    default:
      imageUrl= background_768_image;
  }
  
  return (
    <>
    <div className={styles.banner} style={{backgroundImage:`url(${imageUrl})`}}>
      <h1 className={styles.title}>Ukrainian brand</h1>
      <p className={styles.subtitle}>of women's clothing</p>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.promo}>
        <img src={logo_bonum} alt="logo bonum studio" />
        <div className={styles.text}>
          <p>Online store </p>
          <b>2020</b>
        </div>
      </div>
      </div>
      
      <Catalog />
      </>
  );
};
export default HomePage;