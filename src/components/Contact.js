import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
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
  gap: 50px;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled(motion.h1)`
  font-weight: 200;
  font-size: 60px;
  
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const Form = styled(motion.form)`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled(motion.input)`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  
  &:focus {
    outline: 2px solid #da4ea2;
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
  font-size: 16px;
  
  &:focus {
    outline: 2px solid #da4ea2;
  }
`;

const Button = styled(motion.button)`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  font-size: 16px;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const ContactImg = styled(motion.img)`
  width: 400px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
  animation: float 2s infinite ease alternate;
  
  @keyframes float {
    to {
      transform: translateY(20px);
    }
  }
  
  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    // Here you would normally handle the form submission
  };

  return (
    <Section id="contact" ref={ref}>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Contact Me
            </Title>
            <Input 
              placeholder="Name"
              required
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileFocus={{ scale: 1.02 }}
            />
            <Input 
              placeholder="Email"
              required
              type="email"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileFocus={{ scale: 1.02 }}
            />
            <TextArea
              placeholder="Write your message"
              rows={10}
              required
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileFocus={{ scale: 1.02 }}
            />
            <Button
              type="submit"
              whileHover={{ scale: 1.05, backgroundColor: "#ff69b4" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Send Message
            </Button>
            {formStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ color: '#2ecc71', textAlign: 'center' }}
              >
                Message sent successfully!
              </motion.p>
            )}
          </Form>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial
                color="#da4ea2"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <ContactImg 
            src="/img/img2.png" 
            alt="Contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;