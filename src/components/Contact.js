import React from "react";
import "./contact.css";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div className="contact" initial={{ y: "-50vh" }} animate={{ y: 0 }}>
      <Header />
      <img className="bio-img" src="./images/h.jfif" alt="Makeup kit" />
      <div className="form-container">
        <p className="form-title">Contact Us</p>
        <form className="form-padding">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Type your message here..."
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
