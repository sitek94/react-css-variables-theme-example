import styled from 'styled-components';

import theme from './theme';

const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  color: ${theme.palette.primary};
  background-color: transparent;
  border: 3px solid ${theme.palette.primary};
  outline: 0;
  border-radius: ${theme.shape.borderRadius};

  position: relative;
  z-index: 10;
  overflow: hidden;

  &:after {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 0;
    background-color: rgba(${theme.palette.tertiaryRgb}, 0.7);
    transition: ${theme.transitions.default};
  }

  &:hover:after {
    width: 100%;
  }
`;

export default Button;
