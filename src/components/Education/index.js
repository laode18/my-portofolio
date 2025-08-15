import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { motion } from 'framer-motion'
import { education, experiences } from '../../data/constants'
import EducationCard from '../Cards/EducationCard'

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 660px) {
    align-items: end;
  }
`

// Animasi zig-zag
const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const EducationSection = () => {
  return (
    <Container id="education">
      <Wrapper>
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: false }}
          variants={fadeLeft}
        >
          <Title>Education</Title>
        </motion.div>

        {/* Desc */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: false }}
          variants={fadeRight}
          transition={{ delay: 0.2 }}
        >
          <Desc>
            My education has been a journey of self-discovery and growth. My educational details are as follows.
          </Desc>
        </motion.div>

        {/* Timeline */}
        <TimelineSection>
          <Timeline>
            {education.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1, once: false }}
                    variants={index % 2 === 0 ? fadeLeft : fadeRight} // Zig-zag kiri-kanan
                    transition={{ delay: 0.1 }}
                  >
                    <EducationCard education={item} />
                  </motion.div>
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  )
}

export default EducationSection
