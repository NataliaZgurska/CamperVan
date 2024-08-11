import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import css from './Layout.module.css';
import { AppBar } from '../AppBar/AppBar';

const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            border: '3px solid #32CD32',
            background: '#98FB98',
            color: 'black',
            padding: '16px',
          },
        }}
      />
    </div>
  );
};
export default Layout;
