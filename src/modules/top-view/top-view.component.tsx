import React from 'react';
import { Heading } from '@chakra-ui/react';
import { HotelSearchForm } from '../../components';

import styles from './top-view.module.scss';

export const TopView = () => (
  <>
    <header className={styles.headerWrapper}>
      <Heading as="h1" size="4xl" className={styles.heading} fontWeight="light">
        Hotel finder
      </Heading>
    </header>
    <HotelSearchForm className={styles.searchFormWrapper} />
  </>
);
