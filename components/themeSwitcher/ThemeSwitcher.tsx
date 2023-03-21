'use client';

import Image from 'next/image';
import React from 'react';

import styles from './ThemeSwitcher.module.scss';

type Switcher = 'light' | 'dark';

const ThemeSwitcher = () => {
  const [theme, setTheme] = React.useState<Switcher>('light');

  const buttonHandler = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const imagePath =
    theme === 'light' ? 'assets/svg/icon-moon.svg' : 'assets/svg/icon-sun.svg';

  const image = <Image src={imagePath} height={30} width={30} alt="ddd" />;

  return (
    <button onClick={buttonHandler} className={styles.button} type="button">
      {image}
    </button>
  );
};

export default ThemeSwitcher;
