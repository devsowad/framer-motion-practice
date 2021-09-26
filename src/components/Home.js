import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const buttonVariants = {
  hover: {
    scale: 1.03,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      yoyo: Infinity,
    },
  },
  click: {
    x: [-10, 0, -9, 0, -8, 0, -7, 0, -6, 0, -5, 0],
  },
};

const Home = ({ variants }) => {
  return (
    <motion.div
      className='home container'
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to='/base'>
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
          whileTap='click'
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
