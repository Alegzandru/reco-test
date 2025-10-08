import { AppDiscovery } from './pages/AppDiscoveryPage/AppDiscoveryPage';
import { AppInventory } from './pages/AppInventoryPage/AppInventoryPage';
import { Settings } from './pages/SettingsPage/SettingsPage';

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
