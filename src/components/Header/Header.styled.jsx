import styled from 'styled-components';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  padding: 16px 24px;
  background-color: #3498db; /* Синій фон */
  color: #ffffff; /* Білий колір тексту */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NavigationStyled = styled.nav`
  display: flex;
  gap: 16px;

  a {
    text-decoration: none;
    color: #ffffff; /* Білий колір */
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6b6b; /* Червоний колір при наведенні */
    }
  }
`;

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .userName {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  }

  .logoutButton {
    background-color: #e74c3c; /* Темно-червоний колір */
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #c0392b; /* Темно-червоний колір при наведенні */
      transform: scale(1.05); /* Збільшення розміру при наведенні */
    }
  }
`;

export const LogoStyled = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  animation: colorChange 5s infinite alternate; /* Анімація зміни кольору */

  @keyframes colorChange {
    0% {
      color: #ffffff;
    }
    50% {
      color: #e74c3c; /* Темно-червоний колір */
    }
    100% {
      color: #ffffff;
    }
  }
`;
