import React from 'react';
import { motion } from 'framer-motion';
// import Header from './Header';
// import Footer from './Footer';
import './gallery.css';

const Gallery = () => {
  return (
    <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }}>
      {/* <Header /> */}
      <section>
        <img className='gal-img' src='./images/a.jfif' alt='' />
        <img className='gal-img' src='./images/b.jfif' alt='' />
        <img className='gal-img' src='./images/c.jfif' alt='' />
        <img className='gal-img' src='./images/d.jfif' alt='' />
      </section>
      {/* <Footer /> */}
    </motion.div>
  );
};

export default Gallery;
