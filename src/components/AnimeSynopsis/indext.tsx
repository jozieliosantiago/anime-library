import styles from './styles.module.scss';

interface IAnimeSynopsis {
  synopsis: string;
}

export function AnimeSynopsis({ synopsis }: IAnimeSynopsis) {
  const synopsisCut =
    synopsis.length > 100 ? `${synopsis.slice(0, 300)}...` : synopsis;

  return (
    <div className={styles.synopsis}>
      <p>{synopsisCut}</p>
    </div>
  );
}
