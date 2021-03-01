import React from "react";
import { FaInstagram, FaFacebook, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <motion.h3
        whileHover={{
          textShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        className="logo brand"
        style={{ marginBottom: "1em" }}
      >
        Teez Beauty Glow
      </motion.h3>
      <p style={{ marginBottom: "1em" }}>Copyright &copy; 2021 Tracy Onaiwu</p>
      <div className="links-container">
        <Link className="link" style={{ marginBottom: "1em" }} to="/">
          Home
        </Link>
        <Link className="link" style={{ marginBottom: "1em" }} to="/gallery">
          Gallery
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
      <section className="socialC" style={{ marginBottom: "2em" }}>
        <a
          href="https://www.instagram.com/teezbeautyglow/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/Teez-beauty-glow-102467588340012/?tn-str=k*Fhttps://www.facebook.com/Teez-beauty-glow-102467588340012/?tn-str=k*F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a href="mailto:tracyonaiwu@gmail.com">
          <FaRegEnvelope />
        </a>
      </section>
    </section>
  );
};

export default Footer;
