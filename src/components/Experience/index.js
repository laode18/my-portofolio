import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences, organizations } from '../../data/constants';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

// ==== Styled Components ====
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 80px 0px;
  position: relative;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 0px 0px 80px 0px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  gap: 12px;
`;

const Title = styled(motion.h2)`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled(motion.p)`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

// ==== Animations ====
const zoomFade = {
  hidden: { opacity: 0, scale: 0.9, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: 'blur(6px)',
    transition: { duration: 0.5, ease: 'easeIn' }
  }
};

// Zig-zag animation function
const slideZigZag = (index) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100, // kiri-kanan bergantian
    y: 40,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' }
  }
});

const ExperienceSection = () => {
  return (
    <Container id="experience" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={zoomFade}>
      <Wrapper>
        <Title variants={zoomFade}>Experience</Title>
        <Desc variants={zoomFade}>Here are some of the work experiences I have had so far.</Desc>

        <TimelineSection>
          <Timeline position="alternate">
            {experiences.map((experience, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={slideZigZag(i)}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {i !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <ExperienceCard experience={experience} />
                  </TimelineContent>
                </TimelineItem>
              </motion.div>
            ))}
          </Timeline>
        </TimelineSection>

        <br />
        <AnimatePresence mode="wait">
          <Desc
            key="org-desc"
            variants={zoomFade}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
          >
            There are also several organizational experiences that I have gone through and completed well.
          </Desc>
        </AnimatePresence>

        <TimelineSection>
          <Timeline position="alternate">
            {organizations.map((organization, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={slideZigZag(i)}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {i !== organizations.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <ExperienceCard experience={organization} />
                  </TimelineContent>
                </TimelineItem>
              </motion.div>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default ExperienceSection;
