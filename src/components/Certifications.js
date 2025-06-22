import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  padding-top: 70px;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  
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

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CertificationsGrid = styled(motion.div)`
  display: flex;
  gap: 30px;
  width: 100%;
`;

const CertificateCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  flex: 0 0 calc(33.333% - 20px);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: #da4ea2;
  }
  
  @media only screen and (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const CertificateImage = styled.div`
  height: 180px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 175%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }
`;

const CertificateInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CertificateTitle = styled.h2`
  font-size: 24px;
  color: white;
`;

const CertificateIssuer = styled.h3`
  font-size: 18px;
  color: #da4ea2;
`;

const CertificateDate = styled.p`
  font-size: 16px;
  color: lightgray;
`;

const CertificateDesc = styled.p`
  font-size: 16px;
  color: lightgray;
  flex: 1;
`;

const CertificateLink = styled(motion.a)`
  display: inline-block;
  background-color: #da4ea2;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  
  &:hover {
    background-color: #ff69b4;
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
  
  &:left {
    left: 10px;
  }
  
  &:right {
    right: 10px;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 10px;
`;

const NextButton = styled(NavigationButton)`
  right: 10px;
`;

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const certificates = [
    {
      id: 1,
      title: "Indroduction to Generative Ai Studio",
      issuer: "Google Cloud & SimliLearn",
      date: "June 2025",
      description: "I am super excited to share that I’ve just completed Introduction to Generative AI Studio. ",
      link: "I am super excited to share that I’ve just completed Introduction to Generative AI Studio. ",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQHed8geTFpmEQ/feedshare-shrink_1280/B4DZdVGpfhHAAk-/0/1749479497218?e=1752710400&v=beta&t=l3vRkUntv-kaAN5vhmHbueRMUh30RTUDMQzGaYGREBI"
    },
    {
      id: 2,
      title: "Introduction To Career Skill In Data Analytics",
      issuer: "LinkDin LEarning & Microsoft",
      date: "May 2023",
      description: "Successfully completed a comprehensive Data Analyst certification program covering essential data analysis concepts and tools. The program included hands-on training in.",
      link: "https://media.licdn.com/dms/image/v2/D4D22AQHt9iK1CWJCMg/feedshare-shrink_800/B4DZcU.np_GwAg-/0/1748403649453?e=1752710400&v=beta&t=chz8npATt5pmB0a1h_k9tNIUfpKY6Xlux1ttqz9-rV0",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQHt9iK1CWJCMg/feedshare-shrink_800/B4DZcU.np_GwAg-/0/1748403649453?e=1752710400&v=beta&t=chz8npATt5pmB0a1h_k9tNIUfpKY6Xlux1ttqz9-rV0"
    },
    {
      id: 3,
      title: "Exal",
      issuer: "Oneroadmap",
      date: "may 2022",
      description: "I have successfully completed a comprehensive roadmap for Microsoft Excel, covering a structured progression from beginner to advanced concepts. ",
      link: "https://oneroadmap.io/skills/excel/certificate/CERT-40BF77BC",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQGM0rXtBWJ34A/feedshare-shrink_2048_1536/B4DZcA5lNiIAAs-/0/1748066785150?e=1752710400&v=beta&t=skbRkDln2BxNX9h_xIPDDInZ7RrOIhUB71hiN_TVLko"
    },
    {
      id: 4,
      title: "Data Science & Analytics",
      issuer: "Hp Life",
      date: "MAy 2025",
      description: "I have successfully completed the certification for the HP Data Analyst course. During this course, I learned essential data analysis skills including data cleaning, data visualization, reporting, and generating insights for business decisions",
      link: "https://www.linkedin.com/in/bhushan-navsagar-2b683a293/recent-activity/all/",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQEGRkO5c-1j0g/feedshare-shrink_1280/B4DZb44h6bG0As-/0/1747932292566?e=1752710400&v=beta&t=uPyWyqdk8ToDzUT2m2sv-KsqUfQKo7UMWipTSSgDnd4"
    },
    {
      id: 5,
      title: "Data Analytics",
      issuer: "Deloitte Australia",
      date: "MAy 2025",
      description: "I am happy to share that I have successfully completed the Deloitte Data Analyst course, where I gained valuable knowledge and hands-on experience in data collection, data cleaning, exploratory data analysis, and data visualization using tools like Excel, Power BI, and Tableau. ",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_vrd4ywdAp8PZNKNNB_1747728237197_completion_certificate.pdf",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQEFBO-ww2saZg/feedshare-shrink_2048_1536/B4DZbswQqDIAAs-/0/1747728796953?e=1752710400&v=beta&t=PK8P1-HwjnFBvpc5cQpQR-KyjTsKDMN7SeufR2mIeHA"
    },
    {
      id: 6,
      title: "Data Analytics",
      issuer: "Oneroadmap",
      date: "April 2025",
      description: "His certification has equipped me with valuable insights and practical skills that I’m excited to apply in my career journey.",
      link: "https://oneroadmap.io/skills/da/certificate/CERT-1930BB53",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQGBD6wjHFXDyA/feedshare-shrink_2048_1536/B4DZbURh4QIAAo-/0/1747318091697?e=1752710400&v=beta&t=sYfors8SklqfxQwly7VRQ7VrnDUkLRu88axxyMhnPB4"
    },
    {
      id: 7,
      title: "Fullstack Web Devlopment",
      issuer: "Sumago Infotech Pvt.Ltd.",
      date: "jule 2024",
      description: "Thank you! Sumago Infotech Pvt.Ltd. Pune",
      link: "",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQF8aBxZW4ArEg/feedshare-shrink_1280/feedshare-shrink_1280/0/1724158475471?e=1752710400&v=beta&t=qEldfglTMWYc_Iq7pYyRlMkd8E8--8nHN33deyLHFhs"
    },
    {
      id: 8,
      title: "The BigBull-Final Project",
      issuer: "International Journal of Research Oublication & Reviews",
      date: "March 2024",
      description: "Thrilled to announce that my research paper on The Big Bull stock prediction project has been officially published! This work explores advanced machine learning models combined with technical indicators and candlestick patterns for accurate stock market forecasting",
      link: "",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQELPdT3lwCH2A/feedshare-shrink_2048_1536/B4DZbKea72HsAo-/0/1747153696121?e=1752710400&v=beta&t=sDtqSzQD0vOvNMSdfJaPBykf9wlQHYpMgeeSYaXmCBc"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= certificates.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, certificates.length - 3) : prevIndex - 3
    );
  };

  const visibleCertificates = certificates.slice(currentIndex, currentIndex + 3);

  return (
    <Section id="certifications" ref={ref}>
      <Container>
        <Title
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </Title>
        <CarouselContainer>
          <CertificationsGrid
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {visibleCertificates.map((cert, index) => (
              <CertificateCard
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CertificateImage>
                  <img src={cert.image} alt={cert.title} />
                </CertificateImage>
                <CertificateInfo>
                  <CertificateTitle>{cert.title}</CertificateTitle>
                  <CertificateIssuer>{cert.issuer}</CertificateIssuer>
                  <CertificateDate>{cert.date}</CertificateDate>
                  <CertificateDesc>{cert.description}</CertificateDesc>
                  <CertificateLink 
                    href={cert.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Certificate
                  </CertificateLink>
                </CertificateInfo>
              </CertificateCard>
            ))}
          </CertificationsGrid>
          
          {certificates.length > 3 && (
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

export default Certifications;