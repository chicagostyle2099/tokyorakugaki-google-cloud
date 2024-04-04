import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from 'src/theme';

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}: {
  getHeadComponents: () => React.ReactNode[];
  replaceHeadComponents: (components: React.ReactNode[]) => void;
}) => {
  const headComponents = getHeadComponents();
  replaceHeadComponents([
    ...headComponents,
    <ColorSchemeScript key="color-scheme-script" />,
  ]);
};

export const wrapPageElement = ({ element }: {element: React.ReactNode}) => {
  return <MantineProvider theme={theme}>{element}</MantineProvider>;
};