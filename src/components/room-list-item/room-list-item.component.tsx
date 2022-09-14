import React from 'react';
import { Box, Text } from '@chakra-ui/react';

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
      <Text>{name}</Text>
      <Text>Adults: {numberOfAdults}</Text>
      <Text>Children: {numberOfChildren}</Text>
    </Box>
    <Box className={styles.descriptionSection}>
      <Text>{description}</Text>
    </Box>
  </Box>
);
