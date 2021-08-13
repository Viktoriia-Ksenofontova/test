import './App.scss';
import { Redirect, Route, Switch } from 'react-router';
import { Suspense, lazy, useState, useEffect } from 'react';
import routes from './routes';
import Spinner from './components/Loader';
import Footer from "./components/Footer";
import NavState from './context/navState';
import Header from './components/Header';
import Modal from './components/Modal';
import Cart from "./components/Cart";
import { list } from 'cart-localstorage';

const HomePage = lazy(() =>
  import("./pages/HomePage" /*webpackChunkName: "home-page"*/),
);
const Catalog = lazy(() =>
  import("./pages/Сatalog" /*webpackChunkName: "catalog"*/),
)

function App() {
  
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => setCartItems(list()), []);
  
    
 
  const [showModalCart, setShowModalCart] = useState(false);
  const handleCloseModal = () => {
    setShowModalCart(false);
    document.body.style.overflow = "scroll";
  };
   const handleCartClick = () => {
     setShowModalCart(true);
     document.body.style.overflow = "hidden";
  };

  return (
    <div className="wrapper">
      <NavState>
        <Header onCartClick={handleCartClick} shoppingListLength={cartItems.length}/>
      </NavState>

      {showModalCart && (
        <Modal onCloseModal={handleCloseModal} >
          <Cart shoppingList={cartItems} />
        </Modal>
      )}

      <Suspense fallback={<Spinner />}>
         <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.catalog} component={Catalog} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
      
      <Footer/>  
    </div>
  );
}

export default App;
