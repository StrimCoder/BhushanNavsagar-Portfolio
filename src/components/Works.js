import React, { useState, Suspense } from 'react';
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
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled(motion.li)`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  
  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  
  &:hover {
    &::after {
      animation: moveText 0.5s linear both;
      
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  position: relative;
`;

// Simplified 3D model to improve performance
const Model = ({ project }) => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={project.color} />
    </mesh>
  );
};

// Fallback component for Suspense
const CanvasFallback = () => <div style={{ width: '100%', height: '100%' }}></div>;

const Works = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  const [work, setWork] = useState("Development");
  
  const data = [
    {
      id: 1,
      name: "Web",
      desc: "Building robust applications with cutting-edge technologies.",
      color: "#e74c3c",
    },
    {
      id: 1,
      name: "Development",
      desc: "Building robust applications with cutting-edge technologies.",
      color: "#e74c3c",
    },
    {
      id: 2,
      name: "Illustration",
      desc: "Crafting unique digital illustrations and graphics.",
      color: "#2ecc71",
    },
    {
      id: 3,
      name: "Product Design",
      desc: "Designing intuitive and user-friendly product experiences.",
      color: "#f39c12",
    },
    {
      id: 4,
      name: "Social Media",
      desc: "Creating engaging content strategies for social platforms.",
      color: "#9b59b6",
    },
    {
      id: 1,
      name: "Data Analysis",
      desc: "Analysis the data,And convert to Dashboard or oyher websites.",
      color: "#e74c3c",
    },
  
  ];

  return (
    <Section id="works">
      <Container>
        <Left>
          <List ref={ref}>
            {data.map((item) => (
              <ListItem 
                key={item.id} 
                text={item.name}
                onClick={() => setWork(item.name)}
                whileHover={{ x: 20 }}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: item.id * 0.2 }}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {/* Only render Canvas when in view to save resources */}
          {inView && (
            <Suspense fallback={<CanvasFallback />}>
              <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 2, 1]} />
                <OrbitControls enableZoom={false} autoRotate />
                <Model project={data.find((d) => d.name === work)} />
              </Canvas>
            </Suspense>
          )}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              padding: "20px",
              background: "white",
              color: "black",
              borderRadius: "10px",
              maxWidth: "400px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{work}</h2>
            <p>{data.find((d) => d.name === work)?.desc}</p>
          </motion.div>
        </Right>
      </Container>
    </Section>
  );
};

export default Works;