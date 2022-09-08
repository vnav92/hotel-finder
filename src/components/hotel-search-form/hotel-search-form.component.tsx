import React, { useRef, MutableRefObject } from 'react';
import { Box, FormControl, FormLabel } from '@chakra-ui/react';
import classNames from 'classnames';

import styles from './hotel-search-form.module.scss';
import { NumberInput } from '../number-input';
import { StarRatingInput } from '../star-rating-input';

type FilterConfig = {
  starRating: number;
  numberOfAdults: number;
  numberOfChildren: number;
};

type HotelSearchFormProps = {
  onFormValueChange: ({
    starRating,
    numberOfAdults,
    numberOfChildren,
  }: FilterConfig) => void;
  className?: string;
};

const adultsInputId = 'adults-input';
const childrenInputId = 'children-input';

export const HotelSearchForm: React.FC<HotelSearchFormProps> = ({
  onFormValueChange,
  className,
}) => {
  const currentFilter: MutableRefObject<FilterConfig> = useRef({
    starRating: 0,
    numberOfAdults: 0,
    numberOfChildren: 0,
  });

  const changeFilterValue = (
    value: number,
    property: keyof typeof currentFilter['current']
  ) => {
    const updatedFilter = {
      ...currentFilter.current,
      [property]: value,
    };

    currentFilter.current = updatedFilter;
    onFormValueChange(updatedFilter);
  };

  return (
    <Box className={classNames(styles.formWrapper, className)}>
      <StarRatingInput
        onRatingChange={(value) => changeFilterValue(value, 'starRating')}
      />
      <FormControl className={styles.numberInputControl}>
        <FormLabel htmlFor={adultsInputId} className={styles.numberInputLabel}>
          Adults
        </FormLabel>
        <NumberInput
          id={adultsInputId}
          aria-label="Chose desired number of adults"
          onValueChange={(value) => changeFilterValue(value, 'numberOfAdults')}
        />
      </FormControl>
      <FormControl className={styles.numberInputControl}>
        <FormLabel
          htmlFor={childrenInputId}
          className={styles.numberInputLabel}
        >
          Children
        </FormLabel>
        <NumberInput
          id={childrenInputId}
          aria-label="Chose desired number of adults"
          onValueChange={(value) =>
            changeFilterValue(value, 'numberOfChildren')
          }
        />
      </FormControl>
    </Box>
  );
};
