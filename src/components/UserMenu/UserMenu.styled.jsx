import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Greeting = styled.p`
  font-size: 24px;
  color: var(--primary-color);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
`;

export const Name = styled.span`
  color: var(--accent-color-2);
  font-weight: bold;
`;

export const Button = styled.button`
  font-family: inherit;
  color: var(--basic-white);
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  position: relative;
  display: inline-block;
  overflow: hidden;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
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
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
  }
`;
