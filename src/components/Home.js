import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import './home.css';
// import Header from './Header';
// import Footer from './Footer';

import Gallery from './Gallery';
import Contact from './Contact';
import Reviews from './Reviews';

const PictureOverlay = styled.section`
  position: relative;
  height: 600px;
  @media (min-width: 768px) {
    height: 450px;
  }
`;
const DescPhoto = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  background-image: url(./images/model.jfif);
  background-size: cover;
  background-repeat: no-repeat;


  @media (min-width: 768px) {
    /* height: 300px; */
    /* object-fit: cover; */
    /* width: 768px; */
    /* max-width: 1345px; */
    background-image: url(./images/landscape-cover2.jpg);
  }
`;

const BioPhoto = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: auto;
  padding: 0.5em;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  padding: 1.5em;
  color: #fff;
  width: 100%;
  height: 100%;
  display: block;
  margin: auto;
  line-height: 1.5em;
  font-size: 1.4rem;
  z-index: 1;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
const BioHeader = styled.h2`
  text-align: center;
`;

const BioWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;
const ArtistHeader = styled.h1`
  font-size: 2.5rem;
`;
const BioNoteWrapper = styled.div`
  text-align: center;
  margin: 1.5em auto;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Underline = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: gold;
  margin-bottom: 1rem;
`;

const BioPara = styled.div`
  font-family: 'Caveat', cursive;
  font-size: 1.5rem;
  padding-bottom: 1.5rem;
  color: #fff;
  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const BioPhotoSideNoteWrapper = styled.div`
  /* border: 5px solid; */
  padding: 0 2em;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MoreServices = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  /* border: 1px solid; */
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SubBioHeader = styled.h4`
  text-align: center;
`;

const SideNoteWrapper = styled.div`
  margin: 1em;
  /* border: 1px solid; */
  font-size: 1.3rem;
`;

const Home = () => {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      // transition={{ delay: 0.5, duration: 0.5 }}
      className='home main-font'
    >
      {/* <Header /> */}
      <div>
        <PictureOverlay>
          {/* <DescPhoto src='./images/model.jfif' alt="model's photo" /> */}
          <DescPhoto />
          <Overlay>
            <BioHeader style={{paddingTop: '5em'}}>Teez Beauty</BioHeader>
            <p>
              We give you the very best touch. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ab, est?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates eaque nisi dicta eius repellendus temporibus, quis ipsa
              fugiat debitis aut! Quam consequatur modi voluptatum. Repellat
              enim facere ullam voluptates est!
            </p>
          </Overlay>
        </PictureOverlay>
        <BioWrapper style={{ background: '#DF5E88' }}>
          <BioPhotoSideNoteWrapper>
            <BioPhoto
              className='bio-img'
              src='./images/face.jpg'
              alt="Tracy's photo"
            />
            <BioNoteWrapper>
              <BioPara>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <ArtistHeader>Tracy Onaiwu</ArtistHeader>
                  <Underline style={{ position: 'absolute' }} />
                </div>

                <p>
                  I have been working as a makeup artist since 2017. I have
                  developed a reputation for my outstanding work & commitment to
                  client satisfaction.
                </p>
                <br />
                <p>
                  I provide everything from makeup services to executive
                  presentation makeup for all types of faces, looks and beauty
                  needs.
                </p>
                <br />
                <p>
                  It is particularly important to me to offer you holistic and,
                  above all, long-term optimizations in terms of beauty.
                </p>
              </BioPara>
            </BioNoteWrapper>
          </BioPhotoSideNoteWrapper>
          <MoreServices>
            <SideNoteWrapper>
              <SubBioHeader>Actors</SubBioHeader>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              nesciunt, fuga accusamus similique esse tempora unde soluta nobis
              repellendus vel numquam adipisci dolores omnis est placeat, minus
              deleniti reprehenderit! Maxime?
            </SideNoteWrapper>
            <SideNoteWrapper>
              <SubBioHeader>Weddings</SubBioHeader>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              nesciunt, fuga accusamus similique esse tempora unde soluta nobis
              repellendus vel numquam adipisci dolores omnis est placeat, minus
              deleniti reprehenderit! Maxime?
            </SideNoteWrapper>
            <SideNoteWrapper>
              <SubBioHeader>Presentations</SubBioHeader>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              nesciunt, fuga accusamus similique esse tempora unde soluta nobis
              repellendus vel numquam adipisci dolores omnis est placeat, minus
              deleniti reprehenderit! Maxime?
            </SideNoteWrapper>
            <SideNoteWrapper>
              <SubBioHeader>Lorem</SubBioHeader>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              nesciunt, fuga accusamus similique esse tempora unde soluta nobis
              repellendus vel numquam adipisci dolores omnis est placeat, minus
              deleniti reprehenderit! Maxime?
            </SideNoteWrapper>
          </MoreServices>
        </BioWrapper>
      </div>
      <div className='photos'>
        <Gallery/>
      </div>
      <Contact/>
      <Reviews />
      {/* <Footer /> */}
    </motion.div>
  );
};

export default Home;
