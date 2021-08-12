import styles from "./ProductCard.module.scss";
import { ReactComponent as Like } from "../../images/icon_like.svg";

const ProductCard = ({ product }) => {
  // const products = [
  //   {
  //     id: 1,
  //     img:"image/product/catalog/img_dresses.jpg",
  //     name: "название товара может быть длинное",
  //     price: 1150,
  //     old_price: 1350,
  //     sale: true,
  //     new: false,
  //     likes:true,
  //     category: "dresses",
  //     colors: ["A64D79", "F8DADD", "295494", "22402A"],
  //     size: "s","m",
  //   },]
  return (
    <div>
      <h3 className={styles.category} >{product.category}</h3>
      <div className={styles.productInfo}>
        <img src={product.img} alt={product.name} className={styles.productImage}/>
        {product.sale ? <p className={styles.sale}> Sale </p> : null}
        <button type="button" className = {styles.btnLike} >
          <Like className = { product.likes ? styles.likeActive : styles.like }/> 
        </button>
        
        {product.new ? <p className={styles.new}> New </p> : null}

         <div className={styles.btnWrapper}>
        <button type="button" > в корзину </button>
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