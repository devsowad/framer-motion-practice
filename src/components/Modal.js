import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, type: 'spring' } },
};

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <>
          <motion.div
            className='backdrop'
            variants={backdrop}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <motion.div drag className='modal' variants={modal}>
              <p>Want to make another pizza?</p>
              <Link to='/'>
                <button>Start Again</button>
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
