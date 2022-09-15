import { useQuery } from '@tanstack/react-query';
import { Hotel } from '../shared';
import { getHotelList } from './requests';

export const useGetHotelList = () =>
  useQuery<Hotel[]>(['get-hotel-list'], getHotelList);
