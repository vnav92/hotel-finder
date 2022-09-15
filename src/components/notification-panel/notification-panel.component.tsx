import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import classNames from 'classnames';

import styles from './notification-panel.module.scss';

type NotificationPanelProps = {
  heading: string;
  content: string;
  variant?: 'info' | 'warning';
};

export const NotificationPanel: React.FC<NotificationPanelProps> = ({
  heading,
  content,
  variant = 'info',
}) => (
  <Box
    className={classNames(
      styles.wrapper,
      variant === 'warning' && styles.errorPanelWrapper
    )}
    role="region"
    aria-live="assertive"
  >
    <Heading fontWeight="light">{heading}</Heading>
    <Text fontWeight="light">{content}</Text>
  </Box>
);
