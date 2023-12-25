import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  border: 2px solid var(--basic-white);
  border-radius: 12px;
  padding: 24px;
  background-color: #000000;
  box-shadow: 0 0 0.2rem var(--basic-white), 0 0 0.2rem var(--basic-white),
    0 0 2rem var(--basic-color), 0 0 0.8rem var(--basic-color),
    0 0 2.8rem var(--basic-color), inset 0 0 1.3rem var(--basic-color);
`;

export const Backdrop = styled.div`
  z-index: 1200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const CloseButton = styled.button`
  margin-left: auto;
  margin-bottom: 16px;
  background-color: inherit;
  color: var(--basic-color);
  border: none;
  cursor: pointer;
`;
