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
        {product.sale ? <p className={styles.sale} >Sale</p> : null}
        {product.likes ? <Like className = {styles.likeActive} /> : <Like className = { styles.like }/> }
      </div>
      
      {product.new ? <p>New</p> : null}
           
      <ul className={styles.colorList}>
        {product.colors.map(color => (
        <li key={color} className={styles.colorItem} style={{ backgroundColor: `#${color}` }}>
        </li>
        ))}
      </ul>
      <p className={styles.name}>{product.name}</p>
      <div className={styles.price}>
        <p >{product.price} грн </p>
        <span>{product.old_price} грн </span>
      </div>
  
    </div>
  );
}
export default ProductCard;