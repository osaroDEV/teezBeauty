import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaRegEnvelope,
  FaPhone,
} from "react-icons/fa";
import { TiTimes } from 'react-icons/ti';
import "./menu.css";
const Menu = ({ openMenu }) => {
  return (
    <motion.div
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='menu'
    >
      <div className='hamburger' onClick={() => openMenu()}>
        <TiTimes />
      </div>
      <div className='content'>
        <Link className='link' to='/'>
          <div className='tab' onClick={openMenu}>
            home
          </div>
        </Link>
        <Link className='link' to='/gallery'>
          <div className='tab' onClick={openMenu}>
            Gallery
          </div>
        </Link>
        <Link className='link' to='/contact'>
          <div className='tab' onClick={openMenu}>
            Contact
          </div>
        </Link>
      </div>
      <section className='foot'>
        <span className='contact-us'>Get In Touch</span>

        <section className='socialM'>
          <a
            href='https://www.instagram.com/teezbeautyglow/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
          <a
            href='https://www.facebook.com/Teez-beauty-glow-102467588340012/?tn-str=k*Fhttps://www.facebook.com/Teez-beauty-glow-102467588340012/?tn-str=k*F'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook />
          </a>
          <a href='mailto:tracyonaiwu@gmail.com'>
            <FaRegEnvelope />
          </a>
          <a href='tel:+2347031036340'>
            <FaPhone />
          </a>
        </section>
      </section>
    </motion.div>
  );
};

export default Menu;
