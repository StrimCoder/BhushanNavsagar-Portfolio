import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  padding-top: 70px; /* Added padding to account for navbar */
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 20px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 74px;
  
  @media only screen and (max-width: 768px) {
    font-size: 60px;
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
`;

const Cube = () => {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="#da4ea2" />
      <meshStandardMaterial color="#da4ea2" />
      <meshStandardMaterial color="#9c27b0" />
      <meshStandardMaterial color="#673ab7" />
      <meshStandardMaterial color="#3f51b5" />
      <meshStandardMaterial color="#2196f3" />
    </mesh>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Section id="about" ref={ref}>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </Left>
        <Right>
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Think outside the square space
          </Title>
          <WhatIDo>
            <Line 
              initial={{ width: 0 }}
              animate={inView ? { width: 30 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <Subtitle
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Who I Am
            </Subtitle>
          </WhatIDo>
          <Desc
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I'm a passionate web developer with a strong focus on creating
            interactive, responsive, and visually appealing web applications.
            With expertise in modern frontend technologies and a keen eye for
            design, I strive to build seamless user experiences.
            I am a builder of intelligent systems, a storyteller with data, and a leader who turns technology into business solutions.
          </Desc>
          <Button
            whileHover={{ scale: 1.05, backgroundColor: "#ff69b4" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            See my work
          </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default About;