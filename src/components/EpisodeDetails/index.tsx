import styles from './styles.module.scss';
import { Episode } from '../../types';

interface EpisodeDetailsProps {
  episode: Episode;
}

export function EpisodeDetails({ episode }: EpisodeDetailsProps) {
  const {
    attributes: { canonicalTitle, synopsis, thumbnail, seasonNumber, number },
  } = episode;

  const original = thumbnail?.original;

  return (
    <div className={styles.episodeDetails}>
      <img src={original || ''} alt="" />

      <div className={styles.episodeDescription}>
        <div className={styles.head}>
          <h4>{canonicalTitle}</h4>

          <small>
            Season {seasonNumber} Ep. {number}
          </small>
        </div>

        <p>{synopsis}</p>
      </div>
    </div>
  );
}
