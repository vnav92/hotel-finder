import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, within, waitFor } from '@testing-library/react';

import { HotelSearchForm } from './hotel-search-form.component';

describe('HotelSearchForm', () => {
  it('should render', () => {
    render(<HotelSearchForm onFormValueChange={jest.fn()} />);

    expect(
      screen.getByLabelText('Chose desired hotel standard')
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Adults')).toBeInTheDocument();
    expect(screen.getByLabelText('Children')).toBeInTheDocument();
  });

  it('should call onFormValueChange', async () => {
    const mockOnFormValueChange = jest.fn();

    render(<HotelSearchForm onFormValueChange={mockOnFormValueChange} />);

    userEvent.click(
      within(screen.getAllByRole('group')[0]).getAllByRole('button')[1]
    );

    await waitFor(() => {
      expect(mockOnFormValueChange).toHaveBeenCalledWith({
        numberOfAdults: 0,
        numberOfChildren: 0,
        starRating: 2,
      });
    });

    userEvent.click(
      within(screen.getAllByRole('group')[1]).getAllByRole('button')[1]
    );

    await waitFor(() => {
      expect(mockOnFormValueChange).toHaveBeenCalledWith({
        numberOfAdults: 1,
        numberOfChildren: 0,
        starRating: 2,
      });
    });

    userEvent.click(
      within(screen.getAllByRole('group')[2]).getAllByRole('button')[1]
    );

    await waitFor(() => {
      expect(mockOnFormValueChange).toHaveBeenCalledWith({
        numberOfAdults: 1,
        numberOfChildren: 1,
        starRating: 2,
      });
    });
  });
});
