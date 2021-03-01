import { React, useState } from "react";
import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
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
      <motion.div className="header">
        <div className="logo-img">
          <motion.img className="bio-logo" src="./images/loader.svg" alt="" />
          <h3 className="brand">Teez Beauty Glow</h3>
          <h4>You literally glow</h4>
        </div>
        <div className="hamburger" onClick={() => openMenu()}>
          <BiMenuAltRight />
        </div>
      </motion.div>
      {isMenu ? <Menu openMenu={openMenu} /> : ""}
    </>
  );
};

export default Header;
