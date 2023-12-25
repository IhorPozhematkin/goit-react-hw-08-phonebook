import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const FormTitle = styled.h2`
  font-family: 'Megrim';
  font-weight: normal;
  font-size: 48px;
  margin-bottom: 24px;
  animation: pulsate 1.5s infinite alternate;
`;

export const Wrapper = styled.div`
  margin: 32px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  border: 2px solid white;
  border-radius: 12px;
  padding: 40px 32px;
`;

export const InputBox = styled.div`
  position: relative;
  width: 400px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 20px;
  color: green;
  pointer-events: none;
  transition: 0.5s;
`;

export const Border = styled.span`
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 0;
  height: 1px;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px 0;
  font-size: 20px;
  color: green;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
  background: transparent;

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: -20px;
    left: 0;
    color: lightblue;
    font-size: 12px;
  }

  &:focus ~ ${Border}, &:valid ~ ${Border} {
    width: 100%;
    transition: 0.4s;
    left: 0;
  }
`;

export const Button = styled.button`
  margin: 20px 0;
  font-family: inherit;
  color: var(--basic-white);
  width: 200px;
  height: 32px;
  padding: 4px 10px;
  font-size: 20px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  color: green;
  border: 1px solid var(--basic-color);

  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: lightblue;

    transition: all 0.3s ease;
  }

  &:hover {
    color: lightblue;
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  width: 80%;
  color: red;
  text-align: center;
  margin-bottom: 8px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
