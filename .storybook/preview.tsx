import { ChakraProvider } from '@chakra-ui/react';
import type { Preview } from '@storybook/react-vite';
import React from 'react';

import { system } from '../src/theme/chakraTheme';

const withChakra = (Story: React.FC) => (
  <ChakraProvider value={system}>
    <Story />
  </ChakraProvider>
);

const preview: Preview = {
  decorators: [withChakra],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
