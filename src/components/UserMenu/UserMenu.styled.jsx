import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* Збільшено відстань між елементами */
`;

export const Greeting = styled.p`
  font-size: 24px;
  color: var(--primary-color);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.7); /* Змінено тінь тексту */
`;

export const Name = styled.span`
  color: var(--accent-color-2);
  font-weight: bold; /* Збільшено жирність для кращого виділення */
`;

export const Button = styled.button`
  font-family: inherit;
  color: var(--basic-white);
  padding: 8px 16px; /* Збільшено відступи */
  font-size: 18px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  position: relative;
  display: inline-block;
  overflow: hidden; /* Додано overflow */
  border: 2px solid var(--primary-color);
  border-radius: 8px; /* Збільшено радіус для кращого вигляду */
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--primary-color);
    transition: left 0.3s ease;
  }

  &:hover {
    color: var(--basic-white);
    &::before {
      left: 0;
    }
  }

  &:active {
    top: 2px;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.7); /* Змінено тінь тексту при натисканні */
  }
`;
