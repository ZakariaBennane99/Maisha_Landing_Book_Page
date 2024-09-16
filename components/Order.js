'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/BookSection.css';

const BookSection = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2,    
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); 
    }
  }, [controls, inView]);

  // Animation variants
  const bookVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id='order' className="book-section" ref={ref}>
        <div className='title'>
            <span>ORDER</span>
            <h2>My Autobiography Book</h2>
            <img className='divider' src='divider.svg'/>
        </div>

        <div className="content-container">
          <motion.img
            src="book-cover3.svg"
            alt="Book Cover"
            className="book-cover"
            initial="hidden"
            animate={controls}
            variants={bookVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
    
          <motion.div
            className="text-content"
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="book-description">
                Journey with me through the valleys of despair to the mountaintops of hope. In my memoir, I bare my soul and share how faith became my lifeline. Discover how God's love transformed my pain into purpose. Order now and let my story inspire your own path to resilience and faith.
            </p>
            <button onClick={() => { window.open('https://www.amazon.com/dp/B0CCCSHQKP', '_blank') }} className="buy-button">Order Now</button>
          </motion.div>
        </div>
    </section>
  );
};

export default BookSection;
