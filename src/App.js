import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as LogoSvg } from './logo.svg';
import ThemeToggler from './ThemeToggler';
import theme from './theme';

export default function App() {
  return (
    <Wrapper>
      <Header>
        <Logo />
        <h1>Themes with React & CSS Variables</h1>
        <ThemeToggler />
      </Header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);

  color: ${theme.palette.primary};
  background-color: ${theme.palette.secondary};
  transition: ${theme.transitions.default};
`;

const Logo = styled(LogoSvg)`
  height: 40vmin;
  pointer-events: none;

  /* This works because I've manually removed inline styles in logo.svg */
  fill: ${theme.palette.tertiary};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${theme.animations.rotate} infinite 20s linear;
  }
`;
