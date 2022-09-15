import { Spinner, Flex } from '@chakra-ui/react';
import React from 'react';

import { useGetHotelList, useGetRoomList } from '../../api';
import {
  FilterConfig,
  HotelListItem,
  NotificationPanel,
} from '../../components';
import {
  getHotelsWithStarNumberMatch,
  getRoomsByFilteredHotel,
  getTargetRoomsByHotel,
} from './hotel-list.utils';

type HotelListProps = {
  filterValue: FilterConfig;
};
export const HotelList: React.FC<HotelListProps> = ({ filterValue }) => {
  const {
    isLoading: isLoadingHotelList,
    data: hotelList,
    error: hotelListError,
  } = useGetHotelList();
  const {
    isLoading: isLoadingRoomList,
    data: roomListByHotel,
    error: roomListError,
  } = useGetRoomList(hotelList?.map(({ id }) => id));

  const filteredHotels = getHotelsWithStarNumberMatch(
    hotelList,
    filterValue.starRating
  );
  const roomsByFilteredHotel = getRoomsByFilteredHotel(
    filteredHotels,
    roomListByHotel
  );

  const targetRoomsByHotel = getTargetRoomsByHotel(
    roomsByFilteredHotel,
    filterValue
  );

  const isNonEmptyList = Object.keys(targetRoomsByHotel).some(
    (key) => !!targetRoomsByHotel[key].length
  );

  if (hotelListError || roomListError) {
    return (
      <NotificationPanel
        variant="warning"
        heading="Data fetch error"
        content="Please try again later"
      />
    );
  }

  return (
    <main>
      {isLoadingHotelList || isLoadingRoomList ? (
        <Flex justifyContent="center" p="2">
          <Spinner size="xl" data-testid="loading-spinner" />
        </Flex>
      ) : (
        <>
          {isNonEmptyList ? (
            <section>
              {Object.keys(targetRoomsByHotel).map((hotelId) => (
                <React.Fragment key={hotelId}>
                  {targetRoomsByHotel[hotelId].length ? (
                    <HotelListItem
                      hotelDetails={
                        filteredHotels.find(({ id }) => id === hotelId)!
                      }
                      filterValue={filterValue}
                      rooms={targetRoomsByHotel[hotelId]}
                    />
                  ) : null}
                </React.Fragment>
              ))}
            </section>
          ) : (
            <NotificationPanel
              heading="No rooms found"
              content="Please change your search criteria"
            />
          )}
        </>
      )}
    </main>
  );
};
