import styled from 'styled-components';

export const Item = styled.div`
  background-color: #ffffff;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactText = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const ButtonDelete = styled.button`
  background-color: #3498db;
  color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;
