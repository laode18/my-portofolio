import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import IconLogo from '../../images/logos2.png'
import { FaGithub } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            <img src={IconLogo} style={{ width: '2rem', height: '2rem', marginRight: '10px' }} />
            <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink 
            to="about" 
            smooth={true} 
            duration={500} 
            spy={true} 
            offset={-80} 
            activeClass="active"
          >
            About
          </NavLink>
          <NavLink to="skills" smooth={true} duration={500} spy={true} offset={-80} activeClass="active">
            Skills
          </NavLink>
          <NavLink to="experience" smooth={true} duration={500} spy={true} offset={-80} activeClass="active">
            Experience
          </NavLink>
          <NavLink to="projects" smooth={true} duration={500} spy={true} offset={-80} activeClass="active">
            Projects
          </NavLink>
          <NavLink to="certificate" smooth={true} duration={500} spy={true} offset={-80} activeClass="active">
            Certificate
          </NavLink>
          <NavLink to="education" smooth={true} duration={500} spy={true} offset={-80} activeClass="active">
            Education
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank"><FaGithub style={{ marginRight: "10px" }}/> Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink as={ScrollLink}
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
            >
              About
            </MobileLink>

            <MobileLink as={ScrollLink}
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </MobileLink>

            <MobileLink as={ScrollLink}
              to="experience"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
            >
              Experience
            </MobileLink>

            <MobileLink as={ScrollLink}
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </MobileLink>

            <MobileLink as={ScrollLink}
              to="education"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
            >
              Education
            </MobileLink>

            <GitHubButton
              style={{
                padding: "10px 16px",
                background: theme.primary,
                color: "white",
                width: "max-content"
              }}
              href={Bio.github}
              target="_blank"
            >
              <FaGithub style={{ marginRight: "10px" }} /> Github Profile
            </GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar