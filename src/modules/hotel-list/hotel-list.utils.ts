import { RoomsByHotelId } from '../../api/use-room-list.query';
import { FilterConfig } from '../../components';
import { Hotel } from '../../shared';
import { Room } from '../../shared/types/room.type';

const hasEnoughBeds = (
  occupancy: Room['occupancy'],
  filterValue: FilterConfig
) =>
  occupancy.maxAdults >= filterValue.numberOfAdults &&
  occupancy.maxChildren >= filterValue.numberOfChildren;

export const getHotelsWithStarNumberMatch = (
  hotelList: Hotel[] = [],
  desiredStarNumber: number
) =>
  hotelList.filter(({ starRating }) => Number(starRating) >= desiredStarNumber);

export const getRoomsByFilteredHotel = (
  filteredHotels: Hotel[],
  roomList?: RoomsByHotelId
) =>
  filteredHotels.reduce<Record<string, Room[]>>((acc, curr) => {
    acc[curr.id] = roomList ? roomList[curr.id] : [];

    return acc;
  }, {});

export const getTargetRoomsByHotel = (
  roomsByFilteredHotel: RoomsByHotelId,
  filterValue: FilterConfig
) =>
  roomsByFilteredHotel
    ? Object.keys(roomsByFilteredHotel).reduce<Record<string, Room[]>>(
        (acc, curr) => {
          acc[curr] = roomsByFilteredHotel[curr].filter((room) =>
            hasEnoughBeds(room.occupancy, filterValue)
          );

          return acc;
        },
        {}
      )
    : {};
