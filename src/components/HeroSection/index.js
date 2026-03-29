import React, { useState, useEffect } from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { 
  HeroContainer, HeroBg, HeroLeftContainer, HeroRightContainer, 
  HeroInnerContainer, TextLoop, Title, Span, SubTitle,
  ResumeButton, ResumeSparkle, FlipCard, FlipCardInner, FlipFaceFront, FlipFaceBack
} from './HeroStyle'
import HeroImg from '../../images/photo_profile.jpg'
import HeroImg2 from '../../images/photo_profile.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
  const [flipping, setFlipping] = useState(false);
  const [front, setFront] = useState(true);

  useEffect(() => {
    let timer;
    const startLoop = () => {
      // Delay 5 detik awal
      timer = setTimeout(() => {
        setFlipping(true);
        setTimeout(() => {
          setFlipping(false);
          setFront(prev => !prev);
          startLoop();
        }, 1000);
      }, 5000);
    };
    startLoop();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Hi, I'm {Bio.name}</Title>

            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>

            <SubTitle>{Bio.description}</SubTitle>

            <ResumeButton href={Bio.resume} target="display">
                <ResumeSparkle>Check Resume</ResumeSparkle>
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <FlipCard>
              <FlipCardInner
                className={flipping ? 'flip-fast' : ''}
                style={{ transform: front ? 'rotateY(0deg)' : 'rotateY(180deg)' }}
              >
                <FlipFaceFront>
                  <img src={HeroImg} alt="hero-front" />
                </FlipFaceFront>
                <FlipFaceBack>
                  <img src={HeroImg2} alt="hero-back" />
                </FlipFaceBack>
              </FlipCardInner>
            </FlipCard>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection
