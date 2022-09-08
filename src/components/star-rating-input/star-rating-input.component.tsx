import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import classNames from 'classnames';

import styles from './star-rating-input.module.scss';

type StarRatingInputProps = {
  onRatingChange: (currentRating: number) => void;
};

const starPlaceholderArray = new Array(5).fill('');

export const StarRatingInput: React.FC<StarRatingInputProps> = ({
  onRatingChange,
}) => {
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    onRatingChange(currentRating);
  }, [currentRating, onRatingChange]);

  return (
    <Box
      className={styles.buttonGroupWrapper}
      role="group"
      aria-label="Chose desired hotel standard"
    >
      {starPlaceholderArray.map((item, index) => (
        <IconButton
          key={index}
          aria-label={`${index + 1} star rating`}
          onClick={() => setCurrentRating(index + 1)}
        >
          <StarIcon
            className={classNames(
              currentRating >= index + 1
                ? styles.activeIcon
                : styles.inactiveIcon
            )}
          />
        </IconButton>
      ))}
    </Box>
  );
};
