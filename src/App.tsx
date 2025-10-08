import { Route, Routes } from 'react-router';

import { ROUTES } from './constants';
import { Sidebar } from './features/Sidebar/Sidebar';

const App = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
