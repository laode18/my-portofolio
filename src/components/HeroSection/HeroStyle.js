import styled, { keyframes } from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 30px 30px;
  @media (max-width: 960px) {
    padding: 36px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

/* Flip bolak-balik: 0–180 (tampil belakang) – 360 (kembali depan) */
const flipFlop = keyframes`
  0%   { transform: rotateY(0deg); }
  45%  { transform: rotateY(0deg); }
  50%  { transform: rotateY(90deg); }
  55%  { transform: rotateY(180deg); }  /* belakang terlihat */
  95%  { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }  /* kembali depan */
`;

/* Shimmer khusus pada teks "Resume" saja */
const textShimmer = keyframes`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

const tripleSpinFast = keyframes`
  0%   { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); } /* 3 putaran penuh (3x360) */
`;

export const FlipCard = styled.div`
  perspective: 1200px;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1/1;

  @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 640px) {
    max-width: 280px;
  }
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  
  &.flip-fast {
    animation: ${tripleSpinFast} 1s ease-in-out;
  }
`;

const FlipFaceBase = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  /* gambar di dalam wajah */
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FlipFaceFront = styled(FlipFaceBase)`
  transform: rotateY(0deg);
`;

export const FlipFaceBack = styled(FlipFaceBase)`
  transform: rotateY(180deg);
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color:${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow:  20px 20px 60px #1F2634, -20px -20px 60px #1F2634;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634;
    filter: brightness(1);
  }    

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  } 
`;

// === Hanya tulisan "Resume" yang berkilau ===
export const ResumeSparkle = styled.span`
  display: inline-block;
  margin-left: 6px;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0.55) 0%,
    #ffffff 20%,
    rgba(255,255,255,0.55) 40%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${textShimmer} 2s linear infinite;
`;
