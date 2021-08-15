import { Redirect, Route, Switch } from 'react-router';
import { Suspense, lazy, useState } from 'react';
import routes from './routes';
import Spinner from './components/Loader';
import Footer from "./components/Footer";
import NavState from './context/navState';
import CartCounterState from './context/cartCounterState';
import Header from './components/Header';
import Modal from './components/Modal';
import Cart from "./components/Cart";

import './App.scss';

const HomePage = lazy(() =>
  import("./pages/HomePage" /*webpackChunkName: "home-page"*/),
);
const Catalog = lazy(() =>
  import("./pages/Сatalog" /*webpackChunkName: "catalog"*/),
);
const Favourite = lazy(() =>
  import("./pages/FavouriteProducts" /*webpackChunkName: "favourite"*/),
);

function App() {
   
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
      <CartCounterState>
      <NavState>
        <Header onCartClick={handleCartClick} />
      </NavState>

      {showModalCart && (
        <Modal onCloseModal={handleCloseModal} >
          <Cart />
        </Modal>
      )}

      <Suspense fallback={<Spinner />}>
         <Switch>
          <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.catalog} component={Catalog} />
            <Route path={routes.favourite} component={Favourite} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
      </CartCounterState>
      <Footer/>  
    </div>
  );
}

export default App;
