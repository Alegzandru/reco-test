import { AppDiscovery } from './pages/AppDiscovery/AppDiscovery';
import { AppInventory } from './pages/AppInventory/AppInventory';
import { Settings } from './pages/Settings/Settings';

export const ROUTES = [
  {
    name: 'Apps Discovery',
    path: '/',
    element: <AppDiscovery />,
  },
  {
    name: 'Apps Inventory',
    path: '/apps-inventory',
    element: <AppInventory />,
  },
  {
    name: 'Settings',
    path: '/settings',
    element: <Settings />,
  },
] as const;
