import axios from 'axios';
import { RoomsByHotelId } from '../../shared';

export const getRoomList = async (
  hotelIds: string[]
): Promise<RoomsByHotelId> => {
  const roomsPerHotelId: RoomsByHotelId = {};
  const requestResults = await Promise.allSettled(
    hotelIds.map(async (hotelId) => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/roomRates/${process.env.REACT_APP_HOTEL_COLLECTION_ID}/${hotelId}`
      );

      return { ...data, hotelId };
    })
  );

  let apiError = null;

  for (const result of requestResults) {
    if (result.status === 'fulfilled') {
      roomsPerHotelId[result.value.hotelId] = result.value.rooms;
    } else {
      apiError = result.reason;
    }
  }

  if (apiError) {
    throw new Error(apiError);
  }

  return roomsPerHotelId;
};
