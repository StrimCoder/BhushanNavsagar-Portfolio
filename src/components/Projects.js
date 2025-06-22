import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 70px;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 74px;
  text-align: center;
  
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ProjectsContainer = styled(motion.div)`
  display: flex;
  gap: 30px;
  width: 100%;
`;

const ProjectCard = styled(motion.div)`
  flex: 0 0 calc(33.333% - 20px);
  height: 500px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 400px;
    flex: 0 0 100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ProjectInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectTitle = styled.h2`
  font-size: 24px;
  color: white;
`;

const ProjectDesc = styled.p`
  font-size: 16px;
  color: lightgray;
`;

const TechStack = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const TechTag = styled.span`
  padding: 5px 10px;
  background-color: #da4ea2;
  border-radius: 20px;
  font-size: 12px;
  color: white;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const ProjectLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  
  &:hover {
    color: #da4ea2;
  }
`;

const NavigationButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(218, 78, 162, 0.8);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
`;

const PrevButton = styled(NavigationButton)`
  left: 10px;
`;

const NextButton = styled(NavigationButton)`
  right: 10px;
`;

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "TheBigBull-Stock Prediction Model",
      description: "The BigBull Stock Prediction Model is an intelligent, data-driven application designed to assist traders and investors in making informed market decisions.",
      image: "/img/pro1.png",
      tech: ["Python", "AI", "ML Models", "Css"],
      // demo: "https://example.com/demo2",
      github: "https://github.com/StrimCoder/The-BigBull---Stock-Prediction-Model"
    },
    {
      id: 2,
      title: "Dr.Aarogya AI",
      description: "Web application that uses An intelligent, AI-powered health advisory platform that predicts potential disease risks, offers AI-generated health recommendations, monitors real-time air quality, and interacts through a voice-enabled chatbot.",
      image: "/img/pro2.png",
      tech: ["React", "OpenAI API", "Python", "AI"],
      demo: "https://example.com/demo2",
      github: "https://github.com/StrimCoder/Dr.Aarogya-Ai"
    },
    {
      id: 3,
      title: "Indian Lungs Quality AQI Analysis Dashboard",
      description: "A beautifully designed, interactive, and insightful Air Quality Index (AQI) Analysis Dashboard tailored for Indian cities. Track your environment’s health and stay updated with real-time AQI and weather trends!",
      image: "/img/pro3.png",
      tech: ["Python", "Player Details", "Stremlit", "Styled Components"],
      demo: "https://example.com/demo3",
      github: "https://github.com/StrimCoder/Indian-Lungs-Quality"
    },
    {
      id: 4,
      title: "Real Estate Property Listing Website using React - Estate_Hub",
      description: "Build a modern, responsive real estate website using React.js for the frontend. The website should allow users to browse, search, and filter property listings, view property details.",
      image: "/img/pro4.png",
      tech: ["React", "Home API", "AI", "Google Map"],
      demo: "https://example.com/demo4",
      github: "https://github.com/StrimCoder/Estate-Hub"
    },
    {
      id: 5,
      title: "Another-Way-to-Wish",
      description: "Why say Happy Anniversary like everyone else when you can say it in code? In a world where 99.9% of people post the same 15 predictable letters — “Happy Anniversary” on social platforms!",
      image: "/img/pro5.png",
      tech: ["HTML", "Javascript", "Stylish Components", "Css"],
      demo: "https://example.com/demo5",
      github: "https://github.com/StrimCoder/Another-Way-to-Wish"
    },
    {
      id: 6,
      title: "IPL 2025 Player & Match Analytics Dashboard",
      description: "IPL 2025 Player & Match Analytics Dashboard an interactive, data-driven cricket analytics platform designed to deliver real-time insights, player performances.",
      image: "/img/pro6.png",
      tech: ["React", "Python", "Player Details", "Styled Components"],
      demo: "https://example.com/demo3",
      github: "https://github.com/StrimCoder/IPL-2025-DASHBOARD"
    },
    {
      id: 7,
      title: "IPL PLAYER STATE DASHBOARD",
      description: "Project Overview Welcome to the IPL Player State Dashboard, an interactive and visually engaging dashboard designed to analyze and showcase player statistics from the Indian Premier League (IPL). Built using Power BI and CSV files.",
      image: "/img/pro7.png",
      tech: ["Python", "Power BI", "Exal", "Styled Components"],
      demo: "https://example.com/demo3",
      github: "https://github.com/StrimCoder/IPL-PLAYER-STATE-DASHBOARD"
    },
    {
      id: 8,
      title: " Life Clock Dashboard",
      description: "A Python-Dash dashboard to visualize how you spend your time and how much of your life you’ve already lived across different activities.",
      image: "/img/pro8.png",
      tech: ["Python", "Streamlit", "AI", "Styled Components"],
      demo: "https://example.com/demo3",
      github: "https://github.com/StrimCoder/Life-Clock"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= projects.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, projects.length - 3) : prevIndex - 3
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <Section id="projects" ref={ref}>
      <Container>
        <Title
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </Title>
        <CarouselContainer>
          <ProjectsContainer
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDesc>{project.description}</ProjectDesc>
                  <TechStack>
                    {project.tech.map((tech, i) => (
                      <TechTag key={i}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    <ProjectLink 
                      href={project.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </ProjectLink>
                    <ProjectLink 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsContainer>
          
          {projects.length > 3 && (
            <>
              <PrevButton
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ←
              </PrevButton>
              <NextButton
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                →
              </NextButton>
            </>
          )}
        </CarouselContainer>
      </Container>
    </Section>
  );
};

export default Projects;