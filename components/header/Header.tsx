import ThemeSwitcher from '../themeSwitcher';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.root}>
    <div className={styles.content}>
      <h1 className={styles.title}>TODO</h1>
      <ThemeSwitcher />
    </div>
  </header>
);
