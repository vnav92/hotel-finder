import React from 'react';
import Slider, { Settings } from 'react-slick';
import { Image } from '@chakra-ui/react';

import { Hotel } from '../../shared';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.scss';

type CarouselProps = {
  imagesConfig: Hotel['images'];
};

const defaultSettings: Settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: styles.carouselWrapper,
};

export const Carousel: React.FC<CarouselProps> = ({ imagesConfig }) => (
  <Slider {...defaultSettings}>
    {imagesConfig.map(({ url, alt }, index) => (
      <Image
        key={index}
        className={styles.sliderImage}
        src={url}
        alt={alt || 'Hotel photo'}
      />
    ))}
  </Slider>
);
