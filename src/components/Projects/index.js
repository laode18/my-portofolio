import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Container, 
  Wrapper, 
  Title as StyledTitle, 
  Desc as StyledDesc, 
  CardContainer, 
  ToggleButtonGroup, 
  ToggleButton, 
  Divider 
} from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

// Variants untuk animasi in/out
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: 'easeIn' } }
}

const fadeZoom = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeIn' } }
}

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
        >
          <StyledTitle>Projects</StyledTitle>
        </motion.div>

        {/* Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <StyledDesc>
            I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
          </StyledDesc>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeZoom}
          transition={{ delay: 0.3 }}
        >
          <ToggleButtonGroup>
            {['all', 'web app', 'android app', 'desktop app', 'vba app'].map((category, idx) => (
              <React.Fragment key={category}>
                <ToggleButton
                  active={toggle === category}
                  value={category}
                  onClick={() => setToggle(category)}
                >
                  {category.toUpperCase().replace('_', ' ')}{category.includes("app") && "'S"}
                </ToggleButton>
                {idx < 4 && <Divider />}
              </React.Fragment>
            ))}
          </ToggleButtonGroup>
        </motion.div>

        {/* Cards */}
        <CardContainer>
          {(toggle === 'all' ? projects : projects.filter(item => item.category === toggle))
            .map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeZoom}
                transition={{ delay: 0.1 * index }}
              >
                <ProjectCard 
                  project={project} 
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

export default Projects
