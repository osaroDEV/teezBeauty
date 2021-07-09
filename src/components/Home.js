import React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components'
import "./home.css";
import Header from "./Header";
import Footer from "./Footer";
import Reviews from "./Reviews";

const PictureOverlay = styled.section`
position: relative;
height: 375px;
border: 1px solid green;
`;
const BioImage = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  display: block;
  margin: auto;
`;
const Overlay = styled.div`
  position: absolute;
  padding: 1.5em;
  color: #fff;
  width: 100%;
  height: auto;
  display: block;
  margin: auto;
  line-height: 1.5em;
  font-size: 1.2rem;
  z-index: 1;
`;
const BioHeader = styled.h2`
text-align: center;
`;

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
        <PictureOverlay>
          <BioImage src="./images/face.jpg" alt="Tracy Onaiwu" />
          <Overlay>
            <BioHeader>
              Teez Beauty
            </BioHeader>
            <p>
              We give you the very best touch.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, est?
            </p>
          </Overlay>
        </PictureOverlay>
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
