import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Room } from '../shared/types/room.type';

const getRoomList = (roomId: string): Promise<Room[]> =>
  axios
    .get(
      `${process.env.REACT_APP_API_URL}/roomRates/${process.env.REACT_APP_HOTEL_COLLECTION_ID}/${roomId}`
    )
    .then(({ data }) => data);

export const useGetRoomList = (roomId: string) =>
  useQuery<Room[]>(['get-room-list', roomId], () => getRoomList(roomId));
