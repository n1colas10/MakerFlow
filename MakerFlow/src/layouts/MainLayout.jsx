import { Outlet } from 'react-router-dom';
import Navbar from '../components/Nav.jsx';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout