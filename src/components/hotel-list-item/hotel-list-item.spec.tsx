import React from 'react';
import { render, screen, within, waitFor } from '@testing-library/react';

import { HotelListItem } from './hotel-list-item.component';
import { Hotel, Room } from '../../shared';
import { FilterConfig } from '../hotel-search-form';

const defaultProps = {
  hotelDetails: {
    images: [],
    name: 'test hotel name',
    address: 'test address',
    address1: 'test address 1',
    starRating: '2',
  } as Hotel,
  rooms: [
    {
      longDescription: 'test long description',
      name: 'test room name',
    },
  ] as Room[],
  filterValue: {
    numberOfAdults: 2,
    numberOfChildren: 1,
  } as FilterConfig,
};

describe('HotelListItem', () => {
  it('should render', () => {
    render(<HotelListItem {...defaultProps} />);

    expect(
      screen.getByText(defaultProps.hotelDetails.name)
    ).toBeInTheDocument();
    expect(
      screen.getByText(defaultProps.hotelDetails.address)
    ).toBeInTheDocument();
    expect(
      screen.getByText(defaultProps.hotelDetails.address1)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(
        `Hotel score is ${defaultProps.hotelDetails.starRating} stars`
      )
    );
    expect(screen.getByText(defaultProps.rooms[0].name)).toBeInTheDocument();
    expect(
      screen.getByText(defaultProps.rooms[0].longDescription)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Adults: ${defaultProps.filterValue.numberOfAdults}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Children: ${defaultProps.filterValue.numberOfChildren}`)
    ).toBeInTheDocument();
  });
});
