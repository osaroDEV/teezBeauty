import { React, useState } from "react";
import { motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import Menu from "./Menu";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const openMenu = () => {
    setOpen(!open);
    setIsMenu(!isMenu);
  };

  return (
    <>
      <motion.div className='header'>
        <div className='logo-img'>
          <motion.img className='bio-logo' src='../logo.svg' alt='' />
          <h3 className='brand'>Tracy Onaiwu</h3>
          <h4>makeup magician</h4>
        </div>
        <div className='hamburger' onClick={() => openMenu()}>
          <TiThMenu />
        </div>
      </motion.div>
      {isMenu ? <Menu openMenu={openMenu} /> : ''}
    </>
  );
};

export default Header;
