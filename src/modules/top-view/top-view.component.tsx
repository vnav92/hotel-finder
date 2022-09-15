import React, { ComponentProps } from 'react';
import { Heading } from '@chakra-ui/react';
import { HotelSearchForm } from '../../components';

import styles from './top-view.module.scss';

type TopViewProps = {
  onFilterChange: ComponentProps<typeof HotelSearchForm>['onFormValueChange'];
};

export const TopView: React.FC<TopViewProps> = ({ onFilterChange }) => (
  <>
    <header className={styles.headerWrapper}>
      <Heading
        as="h1"
        size="4xl"
        className={styles.heading}
        fontWeight="hairline"
      >
        Hotel finder
      </Heading>
    </header>
    <HotelSearchForm
      className={styles.searchFormWrapper}
      onFormValueChange={onFilterChange}
    />
  </>
);
