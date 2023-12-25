import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 20px;
  color: var(--primary-color);
  text-decoration: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: transparent;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before,
  &.active::before {
    transform-origin: bottom left;
    transform: scaleX(1);
    background-color: var(--primary-color);
  }

  &.active {
    color: var(--primary-color); /* Змінив колір для активного стану */
    font-weight: bold; /* Збільшив жирність для активного стану */
  }
`;
