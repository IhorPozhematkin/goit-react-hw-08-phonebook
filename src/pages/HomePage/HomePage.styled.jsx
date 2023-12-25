import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const MainTitle = styled.h1`
  font-family: 'Megrim', cursive;
  font-weight: bold;
  font-size: 5rem;
  margin-bottom: 1.5rem;
  color: #e74c3c; /* Яскраво-червоний колір */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4, #a1c4fd);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;
