import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Toppings = ({ addTopping, pizza, variants }) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <motion.div
      className='toppings container'
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to='/order'>
        <button>Order</button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
