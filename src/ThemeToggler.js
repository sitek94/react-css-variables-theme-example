import * as React from 'react';

import Button from './Button';

export default function ThemeToggler() {
  const [theme, setTheme] = React.useState('light');
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <Button onClick={() => setTheme(nextTheme)}>
      Set theme to {nextTheme}
    </Button>
  );
}
