import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { Hotel, Room } from '../../shared';
import { Carousel } from '../carousel';
import { RoomListItem } from '../room-list-item';
import { StarRaringIndicator } from '../star-rating';

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
        <Box className={styles.hotelInfoWrapper}>
          <Box className={styles.informationWrapper}>
            <Heading size="xl" fontWeight="light">
              {hotelDetails.name}
            </Heading>
            <Text fontWeight="light" className={styles.addressText}>
              {hotelDetails.address}
            </Text>
            <Text fontWeight="light" className={styles.addressText}>
              {hotelDetails.address1}
            </Text>
          </Box>
          <Box>
            <StarRaringIndicator
              currentRating={Number(hotelDetails.starRating)}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        {rooms.map(({ longDescription, name, occupancy }, index) => (
          <RoomListItem
            key={index}
            name={name}
            description={longDescription}
            numberOfChildren={occupancy.maxChildren}
            numberOfAdults={occupancy.maxAdults}
          />
        ))}
      </Box>
    </Box>
  );
};
