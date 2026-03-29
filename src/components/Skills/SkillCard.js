import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const Skill = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled(motion.div)`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled(motion.div)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`

// Variants untuk card
const cardFade = {
  hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren", // tunggu card muncul dulu
      staggerChildren: 0.12   // lalu animasikan isi
    }
  },
  exit: {
    opacity: 0,
    y: 40,
    filter: "blur(4px)",
    transition: { duration: 0.4, ease: "easeIn" }
  }
}

// Variants untuk item dalam card
const itemFade = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export default function SkillCard({ skill }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2
  })

  return (
    <Skill
      ref={ref}
      variants={cardFade}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <SkillTitle>{skill.title}</SkillTitle>
      <SkillList>
        {skill.skills.map((item, i) => (
          <SkillItem key={i} variants={itemFade}>
            <SkillImage src={item.image} />
            {item.name}
          </SkillItem>
        ))}
      </SkillList>
    </Skill>
  )
}