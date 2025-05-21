// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponents';
import FooterComponent from './components/FooterComponents';

const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default MainLayout;
