import { React, useState } from "react";
import { motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import Menu from "./Menu";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openMenu = () => {
    setOpen(!open);
    setIsMenu(!isMenu);
  };

  const stickHeader = () => {
    if (window.pageYOffset > 1) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }
  
  window.onscroll = () => stickHeader();

  return (
    <>
      <motion.div className={`header ${isScrolled? 'sticky': ''}`}>
        <div className='logo-img'>
          <motion.img className='bio-logo' src='../header-logo.svg' alt='header logo' />
          <h3 className='brand'>Tracy Onaiwu</h3>
          <h4>makeup magician</h4>  
        </div>
        <div className={`hamburger ${isScrolled? 'stickyHam': ''}`} onClick={() => openMenu()}>
          <TiThMenu />
        </div>
      </motion.div>
      {isMenu ? <Menu openMenu={openMenu} /> : ''}
    </>
  );
};

export default Header;
