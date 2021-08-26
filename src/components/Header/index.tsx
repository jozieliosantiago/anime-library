import styles from './styles.module.scss';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <h1 className={styles.appName}>Anime Library</h1>
        </Link>
      </div>
    </header>
  );
}
