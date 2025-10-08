import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { AppChakraProvider } from '@/providers/chakra/ChakraProvider';
import { TanStackQueryProvider } from '@/providers/tanstack/TanStackQueryProvider';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppChakraProvider>
      <TanStackQueryProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TanStackQueryProvider>
    </AppChakraProvider>
  </StrictMode>
);
