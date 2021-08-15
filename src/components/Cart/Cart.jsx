import { useState, useContext } from 'react';
import { ReactComponent as DeleteItem } from '../../images/closeBtn.svg';
import { list, remove, total } from 'cart-localstorage';
import { CounterContext } from '../../context/cartCounterState';
import styles from "./Cart.module.scss";

const Сart = () => {
  const [shoppingList, setShoppingList] = useState(list());
  const { decrementCartCounter } = useContext(CounterContext);
  
  const handleDeleteBtnClick = (id) => {
    remove(id);
    decrementCartCounter();
    setShoppingList(shoppingList.filter(item => item.id !== id));
   };

  return (
      <div className={styles.cart}>
      <h2 className={styles.title}> Корзина</h2>
    
    {shoppingList.length!==0 ? (
        <ul className={styles.shoppingList}>
     {shoppingList.map((product, i) => (
        <li key={product.id} className={styles.productItem}>
          <p className={styles.number}>{i+1}</p>
          <img width="50" src={product.img} alt={product.name} className={styles.productImage} />
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.price}>{product.price} грн</p>
         <button type="button" onClick={()=>handleDeleteBtnClick(product.id)} className={styles.deleteBtn}>
            <DeleteItem width="15" />
          </button>
        </li>
      ))}
    </ul>) : (<p>Ваша корзина пуста</p>)}
        
    <p>Сумма заказа: <b>{total()} </b> грн</p>
    
    <button type="button" className={styles.toOrder}>
      Оформить заказ
    </button>

  </div>
)
}

export default Сart;