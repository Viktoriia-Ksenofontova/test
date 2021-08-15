import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { list } from 'cart-localstorage';

export const CounterContext = createContext({
  counter: 0,
  changeCounter: () => {},
});

const CartCounterState = ({ children }) => {
  const [counter, changeCounter] = useState(list().length);

  function incrementCartCounter() {
    changeCounter(counter+1);
  }
  function decrementCartCounter() {
    changeCounter(counter - 1);
  }

  return (
    <CounterContext.Provider value={{ counter, incrementCartCounter, decrementCartCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

CartCounterState.propTypes = {
   children: PropTypes.node.isRequired,
};

export default CartCounterState;