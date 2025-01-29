import { Route, Routes } from 'react-router';
import routes from './routes/index';
import { Toaster } from 'react-hot-toast';
import ApiHandling from './layout/modules/GetApiHandling';

const App = () => {

  const renderRoutes = (routes) => {
    return routes.map(({ path, element, children }, index) => (
      <Route key={index} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    ));
  };

  return (
    <div>
      <ApiHandling />
      <Toaster />
      <Routes>{renderRoutes(routes)}</Routes>
    </div>
  );
};

export default App;
