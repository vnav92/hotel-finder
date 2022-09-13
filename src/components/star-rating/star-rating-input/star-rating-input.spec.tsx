import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { StarRatingInput } from './star-rating-input.component';
import userEvent from '@testing-library/user-event';

const STAR_COUNT = 5;

describe('StarRatingInput', () => {
  it('should render', () => {
    render(<StarRatingInput onRatingChange={jest.fn()} />);

    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Chose desired hotel standard')
    ).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(STAR_COUNT);
    expect(screen.getAllByTestId('star-icon')).toHaveLength(STAR_COUNT);
  });

  it('should call onRatingChange', async () => {
    const mockOnRatingChange = jest.fn();

    render(<StarRatingInput onRatingChange={mockOnRatingChange} />);

    userEvent.click(screen.getAllByRole('button')[0]);

    await waitFor(() => {
      expect(mockOnRatingChange).toHaveBeenCalledTimes(2);
    });

    await waitFor(() => {
      expect(mockOnRatingChange).toHaveBeenCalledWith(1);
    });

    userEvent.click(screen.getAllByRole('button')[2]);
    await waitFor(() => {
      expect(mockOnRatingChange).toHaveBeenCalledTimes(3);
    });

    await waitFor(() => {
      expect(mockOnRatingChange).toHaveBeenCalledWith(3);
    });
  });
});
