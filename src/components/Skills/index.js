import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import SkillCard from './SkillCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 20px; 
  box-sizing: border-box;
`

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 16px;
`

export const Title = styled(motion.div)`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1024px) { font-size: 36px; }
  @media (max-width: 768px) { font-size: 28px; margin-top: 12px; }
  @media (max-width: 480px) { font-size: 24px; }
`;

export const Desc = styled(motion.div)`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 1024px) { font-size: 17px; }
  @media (max-width: 768px) { font-size: 16px; padding: 0 10px; }
  @media (max-width: 480px) { font-size: 14px; }
`;

const SkillsContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
  justify-content: center;
`

// Variants untuk title dan desc
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.4, ease: "easeIn" }
  }
}

// Variants untuk stagger antar card
const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Skills() {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const { ref: descRef, inView: descInView } = useInView({ triggerOnce: false, threshold: 0.2 })

  return (
    <Container id="skills">
      <Wrapper>
        <Title
          ref={titleRef}
          variants={fadeInUp}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          exit="exit"
        >
          Skills
        </Title>
        <Desc
          ref={descRef}
          variants={fadeInUp}
          initial="hidden"
          animate={descInView ? "visible" : "hidden"}
          exit="exit"
        >
          Here are some of the skills and abilities that I have studied and understood so far.
        </Desc>
        <SkillsContainer
          variants={containerStagger}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} />
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}
