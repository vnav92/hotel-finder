import axios from 'axios';

import { Hotel } from '../../shared';

export const getHotelList = (): Promise<Hotel[]> =>
  axios
    .get(
      `${process.env.REACT_APP_API_URL}/hotels?collection-id=${process.env.REACT_APP_HOTEL_COLLECTION_ID}`
    )
    .then(({ data }) => data);
