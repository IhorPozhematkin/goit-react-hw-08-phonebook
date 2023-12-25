import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Megrim';
  font-weight: normal;
  font-size: 44px;
  margin-bottom: 16px;
  text-align: center;
  text-shadow: 0 0 5px var(--basic-color), 0 0 10px var(--basic-color),
    0 0 20px var(--basic-color), 0 0 40px var(--basic-color),
    0 0 80px var(--basic-color);
  animation: pulsate 1.5s infinite alternate;
`;

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
`;

export const AddButton = styled.button`
  width: 52x;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  background-color: inherit;
  color: var(--lighter-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 0.2rem var(--basic-white), 0 0 1rem var(--basic-color);
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: var(--basic-color);
    color: #000000;
    box-shadow: 0 0 0.2rem #000000, 0 0 1rem var(--basic-color);
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
