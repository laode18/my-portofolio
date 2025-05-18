import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import CertificateCard from '../Cards/CertificateCards'
import { certificates } from '../../data/constants'


const Certificate = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="certificate">
      <Wrapper>
        <Title>Certificate</Title>
        <Desc>
          I also have several certificates that I have obtained and for which I have taken the competency tests.
        </Desc>
        <br />
        <CardContainer>
          {toggle === 'all' && certificates
            .map((certificate) => (
              <CertificateCard project={certificate} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {certificates
            .filter((item) => item.category == toggle)
            .map((certificate) => (
              <CertificateCard project={certificate} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Certificate