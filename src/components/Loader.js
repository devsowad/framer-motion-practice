import { motion, useCycle } from 'framer-motion';
import React from 'react';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: 'easeOut' },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: { yoyo: Infinity, duration: 0.25, ease: 'easeOut' },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');

  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className='loader'
      ></motion.div>
      <button onClick={() => cycleAnimation()}>Cycle Animation</button>
    </>
  );
};

export default Loader;
