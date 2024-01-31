import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import Loader from './common/Loader';
import routes from './routes';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const role = localStorage.getItem('role');

  useEffect(() => {
    if (!role) {
      setTimeout(() => setLoading(false), 500);
      navigate('/auth/signin');
    } else if (role === 'admin') {
      navigate('/');
      setTimeout(() => setLoading(false), 500);
    } else if (role === 'guest') {
      navigate('/tickets');
      setTimeout(() => setLoading(false), 500);
    } else {
      console.error('Unexpected role:', role);
    }
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
