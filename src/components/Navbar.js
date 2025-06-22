import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled(motion.li)`
  cursor: pointer;
  font-weight: 500;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled(motion.a)`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

const ContactPopup = styled(motion.div)`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #da4ea2;
  z-index: 1000;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Navbar = () => {
  const [contactOpen, setContactOpen] = React.useState(false);

  return (
    <Section>
      <Container>
        <Links>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Logo src="/img/img2.png" alt="Logo" />
          </motion.div>
          <List>
            <ListItem
              whileHover={{ scale: 1.1, color: "#da4ea2" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#home">Home</a>
            </ListItem>
            <ListItem
              whileHover={{ scale: 1.1, color: "#da4ea2" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#about">About</a>
            </ListItem>
            <ListItem
              whileHover={{ scale: 1.1, color: "#da4ea2" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#personal">Personal</a>
            </ListItem>
            <ListItem
              whileHover={{ scale: 1.1, color: "#da4ea2" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#works">Works</a>
            </ListItem>
            <ListItem
              whileHover={{ scale: 1.1, color: "#da4ea2" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#projects">Projects</a>
            </ListItem>
            <ListItem
              whileHover={{ scale: 1.1, color: "#da4ea2" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#skills">Skills</a>
            </ListItem>
            <ListItem
              whileHover={{ scale: 1.1, color: "#da4ea2" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#certifications">Certifications</a>
            </ListItem>
            <ListItem
              whileHover={{ scale: 1.1, color: "#da4ea2" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#social">Social</a>
            </ListItem>
            <ListItem
              whileHover={{ scale: 1.1, color: "#da4ea2" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#contact">Contact</a>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Button 
            href="mailto:bhushannavsagar07@gmail.com?subject=Job%20Opportunity&body=Hello%20Bhushan,%0A%0AI'd%20like%20to%20discuss%20a%20job%20opportunity%20with%20you."
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >
            Hire Me
          </Button>
          <ContactPopup 
            isOpen={contactOpen}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: contactOpen ? 1 : 0, y: contactOpen ? 0 : -20 }}
            transition={{ duration: 0.2 }}
          >
            <ContactInfo>
              <ContactItem>
                <span>Email:</span>
                <a href="mailto:bhushannavsagar07@gmail.com" style={{ color: '#da4ea2' }}>
                  bhushannavsagar07@gmail.com
                </a>
              </ContactItem>
              <ContactItem>
                <span>Phone:</span>
                <a href="tel:+917385349531" style={{ color: '#da4ea2' }}>
                  +91 7385349531
                </a>
              </ContactItem>
            </ContactInfo>
          </ContactPopup>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;