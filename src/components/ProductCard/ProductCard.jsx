import styles from "./ProductCard.module.scss";
import { ReactComponent as Like } from "../../images/icon_like.svg";
import { useState } from 'react';
import { add, exists, remove, total } from 'cart-localstorage';

const ProductCard = ({ product, onClickToCart, onClickLike }) => {
  const [isAddToFavourite, setAddToFavourite] = useState(product.likes);
  const [isAddToCart, setAddToCart] = useState(false);
  const handleClickToCart = () => {
    setAddToCart(!isAddToCart);
    // onClickToCart(product);
   exists(product.id) ? remove(product.id) : add(product);
  }
  const handleClickToFavourite = () => {
    setAddToFavourite(!isAddToFavourite);
}
 
  return (
    <div>
      <h3 className={styles.category} >{product.category}</h3>
      <div className={styles.productInfo}>
        <img src={product.img} alt={product.name} className={styles.productImage}/>
        {product.sale ? <p className={styles.sale}> Sale </p> : null}
        <button type="button" className = {styles.btnLike} onClick={handleClickToFavourite}>
          <Like className = { isAddToFavourite ? styles.likeActive : styles.like }/> 
        </button>
        
        {product.new ? <p className={styles.new}> New </p> : null}

         <div className={styles.btnWrapper}>
          <button type="button" onClick={handleClickToCart}
            className={isAddToCart || exists(product.id) && styles.active}> в корзину </button>
        </div>
        
      </div>
      
      <div className={styles.colorList}>
        {product.colors.map(color => (
          <input
            name={product.id}
            value={color}
            type="radio"
            className={styles.colorItem}
            style={{ backgroundColor: `#${color}` }}
        />
        ))}
      </div>
      <p className={styles.name}>{product.name}</p>
      <div className={styles.price}>
        <p >{product.price} грн </p>
       {product.old_price? <span>{product.old_price} грн </span>: null}
      </div>
  
    </div>
  );
}
export default ProductCard;