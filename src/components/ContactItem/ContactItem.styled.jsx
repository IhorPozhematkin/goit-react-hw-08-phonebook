import styled from 'styled-components';

// Стилі для самого елементу
export const Item = styled.div`
  background-color: #ffffff; /* Білий колір */
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Стилі для тексту контакту
export const ContactText = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

// Стилі для кнопки видалення
export const ButtonDelete = styled.button`
  background-color: #3498db; /* Яскраво-синій колір */
  color: #ffffff; /* Білий колір */
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9; /* Темно-синій колір при наведенні */
  }
`;
