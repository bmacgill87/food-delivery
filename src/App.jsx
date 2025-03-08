import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import LoginPage from './pages/LoginPage';

// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/restaurants' element={<RestaurantPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Route >
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App