import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { NumberInput } from './number-input.component';
import userEvent from '@testing-library/user-event';

const defaultProps = {
  id: 'number-input-id',
  'aria-label': 'test aria label',
  onValueChange: jest.fn(),
};

const mockLabelText = 'label text';

const Comp = () => {
  const inputId = 'test-input-id';

  return (
    <form>
      <label htmlFor={inputId}>{mockLabelText}</label>
      <NumberInput {...defaultProps} id={inputId} />
    </form>
  );
};

describe('NumberInput', () => {
  it('should renden', () => {
    render(<NumberInput {...defaultProps} />);

    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByTestId('minus-icon')).toBeInTheDocument();
    expect(screen.getByTestId('add-icon')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Subtract one from value')
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Add one to value')).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  it('should link input with label', async () => {
    render(<Comp />);

    userEvent.click(screen.getByLabelText(mockLabelText));

    await waitFor(() => {
      expect(screen.getByRole('spinbutton')).toHaveFocus();
    });
  });

  it('should disable minus button', async () => {
    render(<NumberInput {...defaultProps} />);

    expect(screen.getAllByRole('button')[0]).toBeDisabled();

    userEvent.click(screen.getAllByRole('button')[1]);

    await waitFor(() => {
      expect(screen.getAllByRole('button')[0]).not.toBeDisabled();
    });
  });

  it('should change input value', async () => {
    const mockOnValueChange = jest.fn();

    render(<NumberInput {...defaultProps} onValueChange={mockOnValueChange} />);

    expect(screen.getByRole('spinbutton')).toHaveValue('0');

    userEvent.click(screen.getAllByRole('button')[1]);

    await waitFor(() => {
      expect(screen.getByRole('spinbutton')).toHaveValue('1');
    });

    expect(mockOnValueChange).toHaveBeenCalledWith(1);
  });
});
