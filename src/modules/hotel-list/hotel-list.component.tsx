import React from 'react';

import { FilterConfig, HotelListItem } from '../../components';
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
            <section>
              {Object.keys(targetRoomsByHotel).map((hotelId) => (
                <>
                  {targetRoomsByHotel[hotelId].length ? (
                    <HotelListItem
                      key={hotelId}
                      hotelDetails={
                        filteredHotels.find(({ id }) => id === hotelId)!
                      }
                      rooms={targetRoomsByHotel[hotelId]}
                    />
                  ) : null}
                </>
              ))}
            </section>
          ) : (
            <p>jeszcze zobaczymy</p>
          )}
        </>
      )}
    </main>
  );
};
