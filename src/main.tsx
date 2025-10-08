import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TanStackQueryProvider } from '@/providers/tanstack/TanStackQueryProvider.tsx';
import { AppChakraProvider } from '@/providers/chakra/ChakraProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanStackQueryProvider>
      <AppChakraProvider>
        <App />
      </AppChakraProvider>
    </TanStackQueryProvider>
  </StrictMode>
);
