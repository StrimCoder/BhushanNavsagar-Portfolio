import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  padding-top: 120px;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 500px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid #da4ea2;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled(motion.h1)`
  font-size: 54px;
  
  @media only screen and (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
`;

const DetailItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DetailTitle = styled.h3`
  font-size: 20px;
  color: #da4ea2;
`;

const DetailContent = styled.p`
  font-size: 18px;
  color: lightgray;
`;

const Education = styled(motion.div)`
  margin-top: 50px;
`;

const EducationItem = styled(motion.div)`
  margin-bottom: 15px;
  padding-left: 20px;
  border-left: 2px solid #da4ea2;
`;

const Degree = styled.h3`
  font-size: 18px;
  color: white;
`;

const Institution = styled.h4`
  font-size: 16px;
  color: #da4ea2;
`;

const Year = styled.p`
  font-size: 14px;
  color: lightgray;
`;

const PersonalDetails = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Section id="personal" ref={ref}>
      <Container>
        <Left>
          <ProfileImage src="/img/img3.png" alt="Bhushan Navsagar" />
        </Left>
        <Right>
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Personal Details
          </Title>
          
          <DetailItem
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DetailTitle>Name</DetailTitle>
            <DetailContent>Bhushan Manohar Navsagar</DetailContent>
          </DetailItem>
          
          <DetailItem
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <DetailTitle>Email</DetailTitle>
            <DetailContent>bhushannavsagar07@gmail.com</DetailContent>
              <DetailContent>bhushannavsagar@gmail.com</DetailContent>
          </DetailItem>
          
          <DetailItem
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <DetailTitle>Phone</DetailTitle>
            <DetailContent>+91 7385349531</DetailContent>
          </DetailItem>
          
          <DetailItem
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <DetailTitle>Location</DetailTitle>
            <DetailContent>Pune, Maharashtra, India</DetailContent>
          </DetailItem>
          
          <Education
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <DetailTitle>Education</DetailTitle>
            
            <EducationItem
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Degree>10th - SSC</Degree>
              <Institution>ShivChhatrapati High School,Alephata</Institution>
              <Year>2017 - 2022</Year>
            </EducationItem>
            
            <EducationItem
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Degree>Diploma - Computer Engineering</Degree>
              <Institution>Samarth Polytechnic,Belhe</Institution>
              <Year>2022 - 2025</Year>
            </EducationItem>
          </Education>
        </Right>
      </Container>
    </Section>
  );
};

export default PersonalDetails;