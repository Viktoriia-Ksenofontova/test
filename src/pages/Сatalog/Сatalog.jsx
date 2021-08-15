import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { ReactComponent as IconSearch } from "../../images/icon_search.svg";
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
      isNew: false,
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
      isNew: false,
      likes: false,
      category: "costumes",
      colors: ["808080", "64391A"],
      size: ["l","m"],
    },
    {
      id: 3,
      img:"image/product/catalog/img_outwear.jpg",
      name: "название товара может быть длинное",
      price: 1900,
      old_price: null,
      sale: false,
      isNew: true,
      likes: false,
      category: "outwear",
      colors: ["8B4513", "8B2252"],
      size: ["l","m"],
    },
  ];

  const [visibleProductList, setVisibleProductList] = useState(products);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");
  
  const handleSearchTextChange = e => {
    setSearchText(e.currentTarget.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    const newList = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    setVisibleProductList(newList);
  };

  const handleChangeCategory = e => {
    setCategory(e.currentTarget.value);
    if (e.currentTarget.value === "all") {
      setVisibleProductList(products);
    } else {
      const sortList = products.filter(product => product.category === e.currentTarget.value);
      setVisibleProductList(sortList);
    }
  };

  return (
    <main>
      <h2 className={styles.title}>Каталог</h2>
      <div className={styles.sortModule}>
          <select
          value={category}
          name="category"
          className={styles.categorySelection}
          onChange={handleChangeCategory}>
            <option value="all">Все категории</option>
            <option value="dresses">Платья</option>
            <option value="costumes">Костюмы</option>
            <option value="outwear">Верхняя одежда</option>
          </select>

          <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
            <input type="text"
              placeholder="Поиск..."
              className={styles.searchInput}
              value={searchText}
              onChange={handleSearchTextChange}
            />
            <button
              type="submit"
              className={styles.searchBtn}
            >
              <IconSearch/>
            </button>
          </form>
      </div>
       
      <ul className={styles.productList}>
        {visibleProductList.map(product => (
          <li key={product.id} className={styles.productItem}>
            <ProductCard product={product}/>
          </li>
        ))}
      </ul>
    </main>
  );
}
 export default Сatalog;