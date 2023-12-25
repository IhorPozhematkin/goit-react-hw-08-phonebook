import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};

export default Layout;
