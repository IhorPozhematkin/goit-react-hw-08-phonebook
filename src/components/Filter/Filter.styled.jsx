import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-family: 'Megrim', cursive;
  font-weight: bold;
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const FilterField = styled.input`
  width: 300px;
  font-family: inherit;
  font-size: 16px;
  padding: 10px;
  background-color: #ffffff;
  color: var(--basic-color);
  outline: none;
  border: 2px solid #3498db;
  border-radius: 8px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #2980b9;
    box-shadow: 0 0 0.2rem rgba(0, 123, 255, 0.7);
  }
`;
