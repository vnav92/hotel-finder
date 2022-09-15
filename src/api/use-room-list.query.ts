import { useQuery } from '@tanstack/react-query';
import { getRoomList } from './requests';
import { RoomsByHotelId } from '../shared';

export const useGetRoomList = (hotelIds?: string[]) =>
  useQuery<RoomsByHotelId>(
    ['get-room-list', hotelIds],
    () => getRoomList(hotelIds!),
    { enabled: !!hotelIds?.length }
  );
