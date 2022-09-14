import React from 'react';
import { render, screen } from '@testing-library/react';

import { StarRaringIndicator } from './star-rating-indicator.component';

describe('StarRatingIndicator', () => {
  it('should render aria-label', () => {
    const mockCurrentRating = 2;

    render(<StarRaringIndicator currentRating={mockCurrentRating} />);

    expect(screen.getByLabelText(`Hotel score is ${mockCurrentRating} stars`));
  });
});
