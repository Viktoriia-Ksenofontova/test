import PromoHeader from "../../components/PromoHeader";
import logo_bonum from '../../images/logo_bonum.svg';
import background_360_image from "../../images/home/360home.jpg";
import background_768_image from "../../images/home/768home.jpg";
import background_960_image from "../../images/home/960home.jpg";
import background_1366_image from "../../images/home/1366home.jpg";
import background_1440_image from "../../images/home/1440home.jpg";
import background_1920_image from "../../images/home/1920home.jpg";

import filtersSectionImg from "../../images/home/img_main_target.jpg";
import fashionSectionImg1 from "../../images/home/img_the_world_of_fashion.jpg";
import imgForCard from "../../images/home/img_the_world_leg.jpg";
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
      <div className={styles.sidebar}>
        <PromoHeader />
      </div>
      <div className={styles.promo}>
        <img src={logo_bonum} alt="logo bonum studio" />
        <div className={styles.text}>
          <p>Online store </p>
          <b>2020</b>
        </div>
      </div>
      </div>
    <section className={styles.target}>
      <h2>Main target</h2>
      <p>
        Основная деятельность заказчика такая. У него есть такие проблемы. При создании нового дизайна учитывались такие факторы - фактор1, фактор2 и фактор3.  
      </p>
      </section>
      
      <section className={styles.filtersSection}>
        <img src={filtersSectionImg} alt="woman"/>
        <h3>Filters</h3>
        <ul>
          <li> material</li>
          <li> color</li>
          <li> size</li>
        </ul>
        <p>Clear all</p>
      </section>
      
      <section className={styles.fashionSection}>
        <h2>The world of fashion </h2>
        <div>
          <ul className={styles.filterList}>
          <li className={styles.filterItem}> size
            <span> S / M </span>
          </li>
          <li className={styles.filterItem}> style
            <span> casual </span>
          </li>
          <li className={styles.filterItem}> color
            <span> blue </span>
          </li>
        </ul>
        <img src={fashionSectionImg1} alt="женщина" />
        </div>
        
        <div className={styles.card}>
          <p className={styles.cardText}>is woven from stories</p>
          <img src={imgForCard} alt="нога в кросовке" />
          <h3>product card</h3>
          <div className={styles.cardDescription}>
            <ul className={styles.colorList}>
              <li className={styles.colorItem}
            style={{ backgroundColor: `#EEDBD5` }}></li>
              <li className={styles.colorItem}
            style={{ backgroundColor: `#82BDCF` }}></li>
              <li className={styles.colorItem}
            style={{ backgroundColor: `#9C1744` }}></li>
            </ul>
            <p className={styles.name}>Название товара может быть длинное</p>
            <p className={styles.price}>1150 грн</p>
          </div>
          
        </div>
      </section>
  </>
  );
};
export default HomePage;