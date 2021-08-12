import './App.scss';
import { Redirect, Route, Switch } from 'react-router';
import { Suspense, lazy } from 'react';
import routes from './routes';
import Spinner from './components/Loader';
import Footer from "./components/Footer";


const HomePage = lazy(() =>
  import("./pages/HomePage" /*webpackChunkName: "home-page"*/),
);
const Catalog = lazy(() =>
  import("./pages/Сatalog" /*webpackChunkName: "catalog"*/),
)

function App() {
  return (
    <div className="wrapper">
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
