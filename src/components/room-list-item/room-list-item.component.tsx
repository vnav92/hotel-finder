import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

import styles from './room-list-item.module.scss';

type RoomListItemProps = {
  name: string;
  numberOfAdults: number;
  numberOfChildren: number;
  description: string;
};

export const RoomListItem: React.FC<RoomListItemProps> = ({
  name,
  numberOfAdults,
  numberOfChildren,
  description,
}) => (
  <Box className={styles.roomListItemWrapper}>
    <Box className={styles.dataSection}>
      <Heading as="h4" size="md" fontWeight="medium">
        {name}
      </Heading>
      <Text fontWeight="light">Adults: {numberOfAdults}</Text>
      <Text fontWeight="light">Children: {numberOfChildren}</Text>
    </Box>
    <Box className={styles.descriptionSection}>
      <Text>{description}</Text>
    </Box>
  </Box>
);
