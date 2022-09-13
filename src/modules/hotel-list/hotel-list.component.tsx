import React from 'react';

import { FilterConfig } from '../../components';
import { useGetHotelList } from '../../api';
import { useGetRoomList } from '../../api/use-room-list.query';
import {
  getHotelsWithStarNumberMatch,
  getRoomsByFilteredHotel,
  getTargetRoomsByHotel,
} from './hotel-list.utils';

type HotelListProps = {
  filterValue: FilterConfig;
};
export const HotelList: React.FC<HotelListProps> = ({ filterValue }) => {
  const { isLoading: isLoadingHotelList, data: hotelList } = useGetHotelList();
  const { isLoading: isLoadingRoomList, data: roomListByHotel } =
    useGetRoomList(hotelList?.map(({ id }) => id));

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

  return (
    <main>
      {isLoadingHotelList ? (
        <p>loading</p>
      ) : (
        <>
          {filteredHotels.length ? (
            <p>tu renderujemy</p>
          ) : (
            <p>jeszcze zobaczymy</p>
          )}
        </>
      )}
    </main>
  );
};
