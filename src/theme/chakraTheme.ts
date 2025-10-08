import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        white: {
          value: '#FFFFFF',
        },
      },
      fonts: {
        heading: {
          value: 'Inter, sans-serif',
        },
        body: {
          value: 'Inter, sans-serif',
        },
      },
      fontSizes: {},
    },
  },
});

export const system = createSystem(defaultConfig, config);
