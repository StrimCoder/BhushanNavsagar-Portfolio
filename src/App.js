import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

// Lazy load components to improve initial load time
const About = lazy(() => import('./components/About'));
const PersonalDetails = lazy(() => import('./components/PersonalDetails'));
const Works = lazy(() => import('./components/Works'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const SocialMedia = lazy(() => import('./components/SocialMedia'));
const Contact = lazy(() => import('./components/Contact'));

const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  background-size: cover;
  background-position: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Loading fallback component
const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  color: white;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
        <About />
        <PersonalDetails />
        <Works />
        <Projects />
        <Skills />
        <Certifications />
        <SocialMedia />
        <Contact />
      </Suspense>
    </Container>
  );
}

export default App;