import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import styled from './room-list-item.module.scss';

type RoomListItemProps = {
  name: string;
  maxAdults: number;
  maxChildren: number;
  description: string;
};

export const RoomListItem: React.FC<RoomListItemProps> = ({
  name,
  maxAdults,
  maxChildren,
  description,
}) => {
  return (
    <Box className={styled.roomListItemWrapper}>
      <Box>
        <Text>{name}</Text>
        <Text>Adults: {maxAdults}</Text>
        <Text>Children: {maxChildren}</Text>
      </Box>
      <Box>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};
