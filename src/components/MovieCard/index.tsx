import Link from 'next/link';
import Image from 'next/image';

import { AnimeAttributes } from '../../types';
import { AverageRating } from '../AverageRating';

import styles from './styles.module.scss';
import { AnimeSynopsis } from '../AnimeSynopsis/indext';
import { useState } from 'react';

interface MovieCardProps {
  attributes: AnimeAttributes;
  id: string;
}

export function MovieCard({ attributes, id }: MovieCardProps) {
  const [showSummary, setShowSummary] = useState(false);

  const {
    posterImage: {
      large,
      meta: {
        dimensions: { large: largeMeta },
      },
    },
    canonicalTitle,
    startDate,
    averageRating,
    synopsis,
  } = attributes;

  const year = new Date(startDate).getFullYear();

  return (
    <div className={styles.animeCard}>
      <Link href={`/anime/${id}`}>
        <a key={id}>
          <div
            className={styles.post}
            onMouseEnter={() => setShowSummary(true)}
            onMouseLeave={() => setShowSummary(false)}
          >
            <Image
              width={largeMeta.width}
              height={largeMeta.height}
              loading="eager"
              src={large}
              alt={canonicalTitle}
              blurDataURL="https://data.whicdn.com/images/349183071/original.jpg"
              placeholder="blur"
            />

            {showSummary && <AnimeSynopsis synopsis={synopsis} />}
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
