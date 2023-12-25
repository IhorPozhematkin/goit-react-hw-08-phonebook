import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 12px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 24px;
  color: var(--basic-color);
  text-shadow: 0 0 10px #ffffff;

  &.active {
    text-decoration: underline;
  }
`;
