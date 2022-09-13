import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import classNames from 'classnames';

import { starPlaceholderArray } from '../star-indicator.const';

import styles from '../star-rating.module.scss';

type StarRatingInputProps = {
  onRatingChange: (currentRating: number) => void;
};

export const StarRatingInput: React.FC<StarRatingInputProps> = ({
  onRatingChange,
}) => {
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    onRatingChange(currentRating);
  }, [currentRating, onRatingChange]);

  return (
    <Box
      className={styles.groupWrapper}
      role="group"
      aria-label="Chose desired hotel standard"
    >
      {starPlaceholderArray.map((item, index) => (
        <IconButton
          key={index}
          aria-label={`${index + 1} star rating`}
          className={styles.iconButton}
          onClick={() => setCurrentRating(index + 1)}
        >
          <StarIcon
            className={classNames(
              currentRating >= index + 1
                ? styles.activeIcon
                : styles.inactiveIcon
            )}
            data-testid="star-icon"
          />
        </IconButton>
      ))}
    </Box>
  );
};
