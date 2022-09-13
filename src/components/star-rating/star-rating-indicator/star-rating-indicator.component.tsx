import React from 'react';
import classNames from 'classnames';
import { StarIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

import { starPlaceholderArray } from '../star-indicator.const';

import styles from '../star-rating.module.scss';

type StarRaringIndicatorProps = {
  currentRating: number;
};

export const StarRaringIndicator: React.FC<StarRaringIndicatorProps> = ({
  currentRating,
}) => {
  return (
    <Box
      className={styles.groupWrapper}
      role="group"
      aria-label={`Hotel score is ${currentRating} stars`}
    >
      {starPlaceholderArray.map((item, index) => (
        <StarIcon
          key={index}
          className={classNames(
            currentRating >= index + 1 ? styles.activeIcon : styles.inactiveIcon
          )}
          data-testid="star-icon"
        />
      ))}
    </Box>
  );
};
