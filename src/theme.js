import { keyframes } from 'styled-components';

const palette = {
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  tertiary: 'var(--tertiary)',
  tertiaryRgb: 'var(--tertiary-rgb)',
};

const shape = {
  borderRadius: '8px',
};

const animations = {
  rotate: keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `,
};

const transitions = {
  default: 'all 300ms',
};

const theme = {
  animations,
  palette,
  shape,
  transitions,
};

export default theme;
