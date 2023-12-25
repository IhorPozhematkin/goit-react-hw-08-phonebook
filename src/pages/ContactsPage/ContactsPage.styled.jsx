import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Megrim', cursive;
  font-weight: bold;
  font-size: 3rem;
  margin: 20px 0 0;
  text-align: center;
  color: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background: linear-gradient(45deg, #3498db, #2ecc71);
`;

export const AddButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 35px;
  background-color: #ffffff;
  color: #3498db;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 0.2rem #ffffff, 0 0 1rem #3498db;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: #3498db;
    color: #ffffff;
    box-shadow: 0 0 0.2rem #3498db, 0 0 1rem #ffffff;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
