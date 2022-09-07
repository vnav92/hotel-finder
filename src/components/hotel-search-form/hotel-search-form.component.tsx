import React from 'react';
import { Box, FormControl, FormLabel } from '@chakra-ui/react';
import classNames from 'classnames';

import styles from './hotel-search-form.module.scss';
import { NumberInput } from '../number-input';

type HotelSearchFormProps = {
  className?: string;
};

const adultsInputId = 'adults-input';
const childrenInputId = 'children-input';

export const HotelSearchForm: React.FC<HotelSearchFormProps> = ({
  className,
}) => (
  <Box className={classNames(styles.formWrapper, className)}>
    <FormControl className={styles.numberInputControl}>
      <FormLabel htmlFor={adultsInputId} className={styles.numberInputLabel}>
        Adults
      </FormLabel>
      <NumberInput id={adultsInputId} onValueChange={() => {}} />
    </FormControl>
    <FormControl className={styles.numberInputControl}>
      <FormLabel htmlFor={childrenInputId} className={styles.numberInputLabel}>
        Children
      </FormLabel>
      <NumberInput id={childrenInputId} onValueChange={() => {}} />
    </FormControl>
  </Box>
);
