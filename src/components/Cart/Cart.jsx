import styles from "./Cart.module.scss";
import { ReactComponent as DeleteItem } from '../../images/closeBtn.svg';

const Сart = ({shoppingList}) => {
  
  let sum = 0;
  if (shoppingList.length !== 0) { sum = shoppingList.reduce((sum, currentValue) => { return sum + Number(currentValue.price) }, 0) };
  return (
      <div className={styles.cart}>
      <h2 className={styles.title}> Корзина</h2>
    
    {sum!==0 ? (
        <ul className={styles.shoppingList}>
     {shoppingList.map((product, i) => (
        <li key={product.id} className={styles.productItem}>
          <p className={styles.number}>{i+1}</p>
          <img width="50" src={product.img} alt={product.name} className={styles.productImage} />
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.price}>{product.price} грн</p>
          <button type="button" className={styles.deleteBtn}>
            <DeleteItem width="15" />
          </button>
        </li>
      ))}
    </ul>) : (<p>Ваша корзина пуста</p>)}
        
    <p>Сумма заказа: <b>{sum} </b> грн</p>
    
    <button type="button" className={styles.toOrder}>
      Оформить заказ
    </button>

  </div>
)
}

export default Сart;