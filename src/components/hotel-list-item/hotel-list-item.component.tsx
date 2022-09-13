import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { Hotel, Room } from '../../shared';
import { Carousel } from '../carousel';
import { RoomListItem } from '../room-list-item';

import styles from './hotel-list-item.module.scss';

type HotelListItemProps = {
  hotelDetails: Hotel;
  rooms: Room[];
};

export const HotelListItem: React.FC<HotelListItemProps> = ({
  hotelDetails,
  rooms,
}) => {
  return (
    <Box className={styles.hotelListItemWrapper}>
      <Box className={styles.dataSection}>
        <Box className={styles.carouselWrapper}>
          <Carousel imagesConfig={hotelDetails.images} />
        </Box>
        <Box>
          <Heading>{hotelDetails.name}</Heading>
          <Text>{hotelDetails.address}</Text>
          <Text>{hotelDetails.address1}</Text>
        </Box>
        <Box>stars</Box>
      </Box>
      <Box className={styles.roomListSection}>
        {rooms.map(({ longDescription, name, occupancy }, index) => (
          <RoomListItem
            key={index}
            name={name}
            description={longDescription}
            maxChildren={occupancy.maxChildren}
            maxAdults={occupancy.maxAdults}
          />
        ))}
      </Box>
    </Box>
  );
};
