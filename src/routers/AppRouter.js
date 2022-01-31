import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/hero-component/login/LoginScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        } />
        <Route path="/*" element={
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
};
