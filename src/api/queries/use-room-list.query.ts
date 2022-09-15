import { useQuery } from '@tanstack/react-query';

import { RoomsByHotelId } from '../../shared';
import { getRoomList } from '../requests';

export const useGetRoomList = (hotelIds?: string[]) =>
  useQuery<RoomsByHotelId>(
    ['get-room-list', hotelIds],
    () => getRoomList(hotelIds!),
    { enabled: !!hotelIds?.length }
  );
