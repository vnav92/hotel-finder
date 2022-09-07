import React from 'react';
import { Box } from '@chakra-ui/react';
import classNames from 'classnames';

import styles from './hotel-search-form.module.scss';

type HotelSearchFormProps = {
  className?: string;
};

export const HotelSearchForm: React.FC<HotelSearchFormProps> = ({
  className,
}) => {
  return <Box className={classNames(styles.formWrapper, className)}></Box>;
};
