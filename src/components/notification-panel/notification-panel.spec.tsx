import React from 'react';
import { render, screen } from '@testing-library/react';

import { NotificationPanel } from './notification-panel.component';

const defaultProps = {
  heading: 'test heading',
  content: 'test content',
};

describe('NotificationPanel', () => {
  it('should render content', () => {
    render(<NotificationPanel {...defaultProps} />);

    expect(screen.getByText(defaultProps.heading)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.content)).toBeInTheDocument();
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});
