import Link from 'next/link';

import { AnimeAttributes } from '../../types';
import { AverageRating } from '../AverageRating';

import styles from './styles.module.scss';

interface MovieCardProps {
  attributes: AnimeAttributes;
  id: string;
}

export function MovieCard({ attributes, id }: MovieCardProps) {
  const {
    posterImage: { large },
    canonicalTitle,
    startDate,
    averageRating,
  } = attributes;

  const year = new Date(startDate).getFullYear();

  return (
    <div className={styles.animeCard}>
      <Link href={`/anime/${id}`}>
        <a key={id}>
          <div className={styles.post}>
            <img src={large} alt={canonicalTitle} />
          </div>

          <div className={styles.animeInfo}>
            <div className={styles.animeTitle}>
              <h4>{canonicalTitle}</h4>
              <span>{year}</span>
            </div>

            <AverageRating averageRating={averageRating} />
          </div>
        </a>
      </Link>
    </div>
  );
}
