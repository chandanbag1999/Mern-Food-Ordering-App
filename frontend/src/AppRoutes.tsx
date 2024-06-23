import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './pages/Home';
import AuthCallbackPage from './pages/AuthCallbackPage';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './auth/ProtectedRoute';
import ManageRestaurantPage from './pages/ManageRestaurantPage';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout showHero><Home /></Layout>} />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route element={<ProtectedRoute />}>
      <Route path="/user-profile" element={<Layout><UserProfilePage /></Layout>} />
      <Route path="/manage-restaurant" element={<Layout><ManageRestaurantPage /></Layout>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

