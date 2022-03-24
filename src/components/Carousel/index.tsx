import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import { CarouselElement } from './CarouselElement';
import { Anime } from '../../types';

interface ICarousel {
  carouselElements: Anime[];
}

export function Carousel({ carouselElements }: ICarousel) {
  console.log(carouselElements);
  return (
    <ReactCarousel
      showThumbs={false}
      centerMode
      centerSlidePercentage={140}
      transitionTime={3}
      interval={5000}
      infiniteLoop
      autoPlay
      showStatus={false}
    >
      {carouselElements &&
        carouselElements.map((element) => (
          <CarouselElement key={element.id} element={element} />
        ))}
    </ReactCarousel>
  );
}
