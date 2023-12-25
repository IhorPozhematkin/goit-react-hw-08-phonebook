import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-family: 'Megrim';
  font-weight: normal;
  font-size: 120px;
  margin-bottom: 28px;
  animation: pulsate 1.5s infinite alternate;
`;

export const Slogan = styled.p`
  font-weight: normal;
  font-size: 32px;
  animation: pulsate 1.5s infinite alternate;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85vh;
`;

export const IconItem = styled.div`
  position: relative;
  margin-left: auto;
  width: 400px;
  height: 400px;
  background-size: contain;
`;

export const IconShadow = styled.div`
  position: absolute;
  top: -12px;
  left: -12px;
  width: 424px;
  height: 424px;
  background-size: contain;
  filter: blur(10px);
  opacity: 0.95;
  z-index: -1;
  animation: flicker 1.5s infinite alternate;
`;
