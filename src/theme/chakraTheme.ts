import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        white: {
          value: '#FFFFFF',
        },
        surface: {
          1: {
            value: '#393939',
          },
          2: {
            value: '#3E3E3E',
          },
        },
        dark: {
          value: '#2E2E2E',
        },
        accent: {
          bright: {
            value: '#B5E600',
          },
          dark: {
            value: 'rgba(181, 230, 0, 0.08)',
          },
        },
      },
      fonts: {
        heading: {
          value: 'Roboto, sans-serif',
        },
        body: {
          value: 'Roboto, sans-serif',
        },
      },
      fontSizes: {},
    },
  },
});

export const system = createSystem(defaultConfig, config);
