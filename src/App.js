import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';

const componentVariants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 10,
      when: 'beforeChildren',
      staggerAtChildren: 0.4,
    },
  },
  exit: {
    x: '-100vw',
    opacity: 0,
    transition: { ease: 'easeInOut' },
  },
};

function App() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] });
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const addBase = selectedBase => {
    const base = pizza.base !== selectedBase ? selectedBase : '';
    setPizza({ ...pizza, base });
  };

  const addTopping = topping => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.key}>
          <Route path='/base'>
            <Base
              variants={componentVariants}
              addBase={addBase}
              pizza={pizza}
            />
          </Route>
          <Route path='/toppings'>
            <Toppings
              variants={componentVariants}
              addTopping={addTopping}
              pizza={pizza}
            />
          </Route>
          <Route path='/order'>
            <Order
              variants={componentVariants}
              setShowModal={setShowModal}
              pizza={pizza}
            />
          </Route>
          <Route path='/'>
            <Home variants={componentVariants} />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
