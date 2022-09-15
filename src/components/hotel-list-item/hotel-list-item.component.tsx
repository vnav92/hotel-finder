import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { Hotel, Room } from '../../shared';
import { Carousel } from '../carousel';
import { RoomListItem } from '../room-list-item';
import { StarRaringIndicator } from '../star-rating';

import styles from './hotel-list-item.module.scss';
import { FilterConfig } from '../hotel-search-form';

type HotelListItemProps = {
  hotelDetails: Hotel;
  rooms: Room[];
  filterValue: FilterConfig;
};

export const HotelListItem: React.FC<HotelListItemProps> = ({
  hotelDetails,
  rooms,
  filterValue,
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
        {rooms.map(({ longDescription, name }, index) => (
          <RoomListItem
            key={index}
            name={name}
            description={longDescription}
            numberOfChildren={filterValue.numberOfChildren}
            numberOfAdults={filterValue.numberOfAdults}
          />
        ))}
      </Box>
    </Box>
  );
};
