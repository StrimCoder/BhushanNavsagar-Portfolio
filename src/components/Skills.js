import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
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

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Skill = styled(motion.div)`
  padding: 10px 20px;
  background-color: #da4ea2;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
`;

const Desc = styled(motion.p)`
  font-size: 24px;
  color: lightgray;
`;

// Fallback component for Suspense
const CanvasFallback = () => <div style={{ width: '100%', height: '100%' }}></div>;

// Simplified version without Text component
const SkillBox = ({ position, skill, color }) => {
  return (
    <RoundedBox args={[1.5, 0.6, 0.1]} radius={0.05} position={position}>
      <meshStandardMaterial color={color} />
    </RoundedBox>
  );
};

const SkillsScene = () => {
  const skills = [
    { name: "Full Stack", color: "#61dafb" },
    { name: "Python", color: "#3776ab" },
    { name: "AI/ML", color: "#ff6b6b" },
    { name: "Data Analysis", color: "#38b000" },
    { name: "Excel", color: "#107c10" },
    { name: "Communication", color: "#9b59b6" },
    { name: "Data Science", color: "#9b59b6" },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate />
      <group>
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * Math.PI * 2;
          const x = Math.cos(angle) * 2.5;
          const z = Math.sin(angle) * 2.5;
          return (
            <SkillBox
              key={index}
              position={[x, 0, z]}
              skill={skill.name}
              color={skill.color}
            />
          );
        })}
      </group>
    </>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skills = [
    "Full Stack Web Developer",
    "Data Analysis",
    "Project Management",
    "Communication",
    "Python",
    "Excel",
    "PowerPoint",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science"
  ];

  return (
    <Section id="skills" ref={ref}>
      <Container>
        <Left>
          {inView && (
            <Suspense fallback={<CanvasFallback />}>
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <SkillsScene />
              </Canvas>
            </Suspense>
          )}
        </Left>
        <Right>
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </Title>
          <Desc
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I've developed a diverse skill set spanning development, data analysis, and project management.
          </Desc>
          <SkillsContainer>
            {skills.map((skill, index) => (
              <Skill
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: "#ff69b4" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              >
                {skill}
              </Skill>
            ))}
          </SkillsContainer>
        </Right>
      </Container>
    </Section>
  );
};

export default Skills;