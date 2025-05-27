import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponentAfter from './components/NavbarComponentAfter';
import FooterComponent from './components/FooterComponents';

const MainLayout = () => {
  return (
    <>
      <NavbarComponentAfter />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default MainLayout;
