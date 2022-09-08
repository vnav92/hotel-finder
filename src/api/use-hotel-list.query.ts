import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Hotel } from '../shared';

const getHotelList = (): Promise<Hotel[]> =>
  axios
    .get(
      `${process.env.REACT_APP_API_URL}/hotels?collection-id=${process.env.REACT_APP_HOTEL_COLLECTION_ID}`
    )
    .then(({ data }) => data);

export const useGetHotelList = () =>
  useQuery<Hotel[]>(['get-hotel-list'], getHotelList);
