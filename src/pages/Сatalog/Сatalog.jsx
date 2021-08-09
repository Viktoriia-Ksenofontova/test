import ProductCard from '../../components/ProductCard';
import styles from './Catalog.module.scss';

const Сatalog = () => {
   const products = [
    {
      id: 1,
      img:"image/product/catalog/img_dresses.jpg",
      name: "название товара может быть длинное и даже в две строки",
      price: 1150,
      old_price: 1350,
      sale: true,
      new: false,
      likes:true,
      category: "dresses",
      colors: ["A64D79", "F8DADD", "295494", "22402A"],
      size: ["s","m"],
    },
      {
      id: 2,
      img:"image/product/catalog/img_costumes.jpg",
      name: "название товара может быть длинное",
      price: 1600,
      old_price: 2300,
      sale: false,
      new: false,
      likes: false,
      category: "costumes",
      colors: ["64391A", "808080"],
      size: ["l","m"],
    },
      {
      id: 3,
      img:"image/product/catalog/img_outwear.jpg",
      name: "название товара может быть длинное",
      price: 1235,
      old_price: 1900,
      sale: false,
      new: true,
      likes: false,
      category: "outwear",
      colors: ["8B4513", "8B2252"],
      size: ["l","m"],
    },
  ];

  return (
    <>
      <ul className={styles.productList}>
        {products.map(product => (
          <li key={product.id} className={styles.productItem}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
 export default Сatalog;