import React from "react";
import { motion } from "framer-motion";
import "./home.css";
import Header from "./Header";
import Footer from "./Footer";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      // transition={{ delay: 0.5, duration: 0.5 }}
      className="home main-font"
    >
      <Header />
      <div>
        <img className="bio-img" src="./images/bio.jpg" alt="Tracy Onaiwu" />
        <section>
          <div className="bio-title center margin">
            <motion.h1
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 1, duration: 0.5 }}
            >
              Tracy Onaiwu
            </motion.h1>
            <div className="underline"></div>
          </div>
        </section>
        <div className="main bio-para">
          <p>
            I have been working as a makeup artist since 2017. I have developed
            a reputation for my outstanding work & commitment to client
            satisfaction.
          </p>
          <br />
          <p>
            I provide everything from makeup services to executive presentation
            makeup for all types of faces, looks and beauty needs.
          </p>
          <br />
          <p>
            It is particularly important to me to offer you holistic and, above
            all, long-term optimizations in terms of beauty.
          </p>
        </div>
      </div>
      <div className="photos">
        <img className="bio-img" src="./images/model.jpg" alt="model" />
        <img className="bio-img" src="./images/work.jpg" alt="work" />
      </div>
      <Reviews />
      <Footer />
    </motion.div>
  );
};

export default Home;
