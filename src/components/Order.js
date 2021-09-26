import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    // transition: {
    //   duration: 0.5,
    // },
  },
};

const Order = ({ pizza, variants, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  }, [setShowModal]);

  return (
    <motion.div
      className='container order'
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map(topping => (
        <motion.div variants={childVariants} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
