import '@mantine/core/styles.css';

import React from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from 'src/theme';

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => {
  return <MantineProvider theme={theme}>{element}</MantineProvider>;
};
