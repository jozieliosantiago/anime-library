import Image from 'next/image';
import { Anime } from '../../../types';
import { CarouselDetails } from '../CarouselDetails';

import styles from './styles.module.scss';

interface ICarouselElement {
  element: Anime;
}

export function CarouselElement({ element }: ICarouselElement) {
  const {
    attributes: {
      canonicalTitle,
      coverImage: {
        large,
        meta: {
          dimensions: {
            large: { height, width },
          },
        },
      },
    },
  } = element;

  return (
    <div className={styles.carouselElement}>
      <Image
        src={large}
        width={width}
        height={height}
        alt={canonicalTitle || ''}
      />

      <div className={styles.darkCover} />

      <CarouselDetails anime={element} />
    </div>
  );
}
