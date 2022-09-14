import React from 'react';
import { render, screen } from '@testing-library/react';

import { TopView } from './top-view.component';

describe('TopView', () => {
  it('should render', () => {
    render(<TopView onFilterChange={jest.fn()} />);

    expect(screen.getByText('Hotel finder')).toBeInTheDocument();
    expect(screen.getByTestId('hotel-search-form')).toBeInTheDocument();
  });
});
