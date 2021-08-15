import { useState, useContext, useEffect } from 'react';
import { ReactComponent as Like } from "../../images/icon_like.svg";
import { add, exists, remove } from 'cart-localstorage';
import { CounterContext } from '../../context/cartCounterState';
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const { id, likes, img, name, category, sale, isNew, colors, price, old_price} = product;
  const {incrementCartCounter, decrementCartCounter } = useContext(CounterContext);
  
  const [isAddToFavourite, setAddToFavourite] = useState(likes);
  const [isAddToCart, setAddToCart] = useState(false);
  
  useEffect(() => {
    setAddToCart(exists(id))
  }, [exists(id)]);
  
  const handleClickToCart = () => {
    if (exists(id)) {
      remove(id);
      decrementCartCounter();
      setAddToCart(false);
    } else {
      add(product);
      incrementCartCounter();
      setAddToCart(true);
    }
  }

  const handleClickToFavourite = () => {
    setAddToFavourite(!isAddToFavourite);
    // TODO добавление в LocalStorage ...
  }
   
 
  return (
    <div>
      <h3 className={styles.category} >{category}</h3>
      <div className={styles.productInfo}>
        <img src={img} alt={name} className={styles.productImage} loading="lazy"/>
        {sale && <p className={styles.sale}> Sale </p>}
        <button type="button" className = {styles.btnLike} onClick={handleClickToFavourite}>
          <Like className = { isAddToFavourite ? styles.likeActive : styles.like }/> 
        </button>
        
        {isNew && <p className={styles.new}> New </p> }

         <div className={styles.btnWrapper}>
          <button type="button" onClick={handleClickToCart}
            className={isAddToCart ? styles.active : undefined}> в корзину </button>
        </div>
        
      </div>
      
      <div className={styles.colorList}>
        {colors.map(color => (
          <input
            name={id}
            key={color}
            value={color}
            type="radio"
            className={styles.colorItem}
            style={{ backgroundColor: `#${color}` }}
        />
        ))}
      </div>
      <p className={styles.name}>{name}</p>
      <div className={styles.price}>
        <p >{price} грн </p>
       {old_price && <span>{old_price} грн </span>}
      </div>
  
    </div>
  );
}
export default ProductCard;