import styles from './FavouriteProducts.module.scss';
import developmentImg from "../../images/development.jpg";

const FavouriteProducts = () => {
   return (
      <main className={styles.favouriteContent}>
      <h2>Здесь будет список избранных товаров</h2>
         <img src={developmentImg} alt="страница в разработке" className={styles.developmentImg}/>
      </main>
   )
}
 export default FavouriteProducts;