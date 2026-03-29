import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Container, 
  Wrapper, 
  Title as StyledTitle, 
  Desc as StyledDesc, 
  CardContainer 
} from './ProjectsStyle'
import CertificateCard from '../Cards/CertificateCards'
import { certificates } from '../../data/constants'

// Variants animasi
const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, x: -80, transition: { duration: 0.4, ease: 'easeIn' } }
}

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, x: 80, transition: { duration: 0.4, ease: 'easeIn' } }
}

const flipCard = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: { 
    opacity: 1, 
    rotateX: 0, 
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { opacity: 0, rotateX: -90, transition: { duration: 0.4, ease: 'easeIn' } }
}

const Certificate = ({ openModal, setOpenModal }) => {
  const [toggle] = useState('all')

  return (
    <Container id="certificate">
      <Wrapper>

        {/* Title - Slide dari kiri */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideLeft}
        >
          <StyledTitle>Certificate</StyledTitle>
        </motion.div>

        {/* Desc - Slide dari kanan */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideRight}
          transition={{ delay: 0.2 }}
        >
          <StyledDesc>
            I also have several certificates that I have obtained and for which I have taken the competency tests.
          </StyledDesc>
        </motion.div>

        <br />

        {/* Cards - Flip 3D */}
        <CardContainer>
          {(toggle === 'all' ? certificates : certificates.filter(item => item.category === toggle))
            .map((certificate, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.15 }}
                variants={flipCard}
                transition={{ delay: 0.15 * index }}
                style={{ transformOrigin: 'top' }}
              >
                <CertificateCard 
                  project={certificate} 
                  openModal={openModal} 
                  setOpenModal={setOpenModal} 
                />
              </motion.div>
            ))}
        </CardContainer>

      </Wrapper>
    </Container>
  )
}

export default Certificate
