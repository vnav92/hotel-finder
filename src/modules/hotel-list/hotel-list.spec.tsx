import React, { ComponentProps } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

import * as hotelApi from '../../api/requests/get-hotel-list.request';
import * as roomApi from '../../api/requests/get-room-list.request';
import { initialFilterValue } from '../../components';
import { Hotel, RoomsByHotelId } from '../../shared';
import { HotelList } from './hotel-list.component';

const WrappedHotelList = (props: ComponentProps<typeof HotelList>) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HotelList {...props} />
    </QueryClientProvider>
  );
};

const mockHotelsResponse = [
  { id: 'hotel id 1', name: 'test hotel 1', starRating: '3', images: [] },
  { id: 'hotel id 2', name: 'test hotel 2', starRating: '5', images: [] },
] as Hotel[];

const mockRoomsResponse = {
  [mockHotelsResponse[0].id]: [
    {
      name: 'test hotel 1 room 1',
      occupancy: { maxAdults: 1, maxChildren: 1 },
    },
    {
      name: 'test hotel 1 room 2',
      occupancy: { maxAdults: 3, maxChildren: 3 },
    },
  ],
  [mockHotelsResponse[1].id]: [
    {
      name: 'test hotel 2 room 1',
      occupancy: { maxAdults: 1, maxChildren: 1 },
    },
    {
      name: 'test hotel 2 room 2',
      occupancy: { maxAdults: 4, maxChildren: 4 },
    },
  ],
} as RoomsByHotelId;

describe('HotelList', () => {
  beforeEach(() => {
    jest
      .spyOn(hotelApi, 'getHotelList')
      .mockResolvedValueOnce(mockHotelsResponse);
    jest.spyOn(roomApi, 'getRoomList').mockResolvedValueOnce(mockRoomsResponse);
  });

  it('should render each fetched hotel', async () => {
    render(<WrappedHotelList filterValue={initialFilterValue} />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();

    expect(
      await screen.findByText(mockHotelsResponse[0].name)
    ).toBeInTheDocument();
    expect(screen.getByText(mockHotelsResponse[1].name)).toBeInTheDocument();
    expect(
      screen.getByText(mockRoomsResponse[mockHotelsResponse[0].id][0].name)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockRoomsResponse[mockHotelsResponse[1].id][0].name)
    ).toBeInTheDocument();
  });

  it('should render hotels based on star rating', async () => {
    render(
      <WrappedHotelList
        filterValue={{ ...initialFilterValue, starRating: 4 }}
      />
    );

    expect(
      await screen.findByText(mockHotelsResponse[1].name)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(mockHotelsResponse[0].name)
    ).not.toBeInTheDocument();
  });

  it('should render hotels and rooms based on occupancy', async () => {
    render(
      <WrappedHotelList
        filterValue={{ starRating: 3, numberOfAdults: 2, numberOfChildren: 2 }}
      />
    );

    expect(
      await screen.findByText(mockHotelsResponse[0].name)
    ).toBeInTheDocument();
    expect(screen.getByText(mockHotelsResponse[0].name)).toBeInTheDocument();
    expect(
      screen.queryByText(mockRoomsResponse[mockHotelsResponse[0].id][0].name)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(mockRoomsResponse[mockHotelsResponse[1].id][0].name)
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(mockRoomsResponse[mockHotelsResponse[0].id][1].name)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockRoomsResponse[mockHotelsResponse[1].id][1].name)
    ).toBeInTheDocument();
  });

  it('should not render hotel if filter value is exceeding occupancy', async () => {
    render(
      <WrappedHotelList
        filterValue={{ starRating: 3, numberOfAdults: 4, numberOfChildren: 4 }}
      />
    );

    expect(
      await screen.findByText(mockHotelsResponse[1].name)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(mockHotelsResponse[0].name)
    ).not.toBeInTheDocument();
  });
});
