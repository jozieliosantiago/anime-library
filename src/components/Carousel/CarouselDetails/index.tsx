import { Anime, IAgeRating } from '../../../types';
import { FaPlayCircle, FaRegCalendar } from 'react-icons/fa';

import styles from './styles.module.scss';
import { getAgeRating } from '../../../../utils/getAgeRatingGuide';

interface ICarouselDetails {
  anime: Anime;
}

export function CarouselDetails({ anime }: ICarouselDetails) {
  const {
    attributes: {
      canonicalTitle,
      startDate,
      synopsis,
      showType,
      ageRatingGuide,
    },
  } = anime;
  const ageRating = ageRatingGuide && ageRatingGuide.replace(/\D/g, '');
  const rate: IAgeRating = ageRating
    ? getAgeRating(Number(ageRating))
    : { rateClass: 'all', rateValue: 'L' };
  const date = Intl.DateTimeFormat('pt-br', { dateStyle: 'medium' })
    .format(new Date(startDate))
    .replace('de', '');

  return (
    <div className={styles.carouselDetails}>
      <div className={styles.title}>{canonicalTitle}</div>

      <div className={styles.details}>
        <span className={styles.showType}>
          <FaPlayCircle /> {showType}
        </span>

        <span className={styles.date}>
          <FaRegCalendar />
          {date}
        </span>

        <span className={`${styles.ageRating} ${styles[rate.rateClass]}`}>
          {rate.rateValue}
        </span>
      </div>

      <div className={styles.synopsis}>{synopsis}</div>
    </div>
  );
}
