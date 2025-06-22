import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 74px;
  text-align: center;
  margin-bottom: 50px;
  
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 80%;
  max-width: 1000px;
  
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SocialCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    border-color: #da4ea2;
    background-color: rgba(218, 78, 162, 0.1);
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.bgColor || "#da4ea2"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
`;

const SocialInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SocialName = styled.h3`
  font-size: 24px;
  color: white;
`;

const SocialUsername = styled.p`
  font-size: 16px;
  color: lightgray;
`;

const SocialDescription = styled.p`
  font-size: 14px;
  color: lightgray;
  margin-top: 5px;
`;

const SocialMedia = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const socialProfiles = [
    {
      name: "LinkedIn",
      username: "@Bhushan Navsagar",
      description: "Professional network and career updates",
      icon: "in",
      url: "https://www.linkedin.com/in/bhushan-navsagar-2b683a293/",
      color: "#0077b5"
    },
    {
      name: "GitHub",
      username: "@StrimCoder",
      description: "Code repositories and open-source contributions",
      icon: "Git",
      url: "https://github.com/StrimCoder",
      color: "#333"
    },
    {
      name: "Twitter/X",
      username: "@StrimNAvsagar@07",
      description: "Thoughts and industry updates",
      icon: "X",
      url: "https://x.com/StrimNavsagar07?s=09",
      color: "#1da1f2"
    },
    {
      name: "Instagram",
      username: "@StrimNavsagar07",
      description: "Personal photos and creative content",
      icon: "IG",
      url: "https://www.instagram.com/strim_navsagar.07/",
      color: "#e1306c"
    }
  ];

  return (
    <Section id="social" ref={ref}>
      <Container>
        <Title
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Connect With Me
        </Title>
        <SocialGrid>
          {socialProfiles.map((profile, index) => (
            <SocialCard
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <IconContainer bgColor={profile.color}>
                {profile.icon}
              </IconContainer>
              <SocialInfo>
                <SocialName>{profile.name}</SocialName>
                <SocialUsername>{profile.username}</SocialUsername>
                <SocialDescription>{profile.description}</SocialDescription>
              </SocialInfo>
            </SocialCard>
          ))}
        </SocialGrid>
      </Container>
    </Section>
  );
};

export default SocialMedia;