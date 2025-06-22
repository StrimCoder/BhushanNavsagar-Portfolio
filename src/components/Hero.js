import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 70px;
  
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 10%;
  
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    padding: 20px;
    text-align: center;
  }
`;

const Title = styled(motion.h1)`
  font-size: 74px;
  margin: 0;
  
  @media only screen and (max-width: 768px) {
    font-size: 56px;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled(motion.div)`
  height: 5px;
  width: 30px;
  background-color: #da4ea2;
  border-radius: 10px;
`;

const Subtitle = styled(motion.h2)`
  color: #da4ea2;
`;

const Desc = styled(motion.p)`
  font-size: 24px;
  color: lightgray;
  
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Button = styled(motion.button)`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled(motion.img)`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

// Optimized 3D sphere with reduced complexity
const HeroSphere = () => {
  return (
    <Sphere args={[1, 50, 100]} scale={2.4}>
      <MeshDistortMaterial
        color="#3d1c56"
        attach="material"
        distort={0.5}
        speed={1}
      />
    </Sphere>
  );
};

// Fallback component for Suspense
const CanvasFallback = () => <div style={{ width: '100%', height: '100%' }}></div>;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <Main>
        <Left>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Think. Make. Solve.
          </Title>
          <WhatIDo>
            <Line 
              initial={{ width: 0 }}
              animate={{ width: 30 }}
              transition={{ duration: 1 }}
            />
            <Subtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              What I Do
            </Subtitle>
          </WhatIDo>
          <Desc
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            I enjoy creating delightful, human-centered digital experiences.Building and managing AI-powered web applications, data dashboards, and business intelligence tools, while leading projects and delivering data-driven solutions that support organizational growth and innovation.
          </Desc>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Learn More
          </Button>
        </Left>
        <Right>
          <Suspense fallback={<CanvasFallback />}>
            <Canvas dpr={[1, 2]} performance={{ min: 0.5 }}>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <HeroSphere />
            </Canvas>
          </Suspense>
          <Img 
            src="/img/img1.png" 
            alt="developer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </Right>
      </Main>
    </HeroContainer>
  );
};

export default Hero;